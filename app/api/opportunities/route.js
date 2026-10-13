export const runtime = 'nodejs';
export const revalidate = 3600;
const TERMS = ['content operations', 'content writer', 'editor', 'marketing communications', 'AI content'];
const RX = /(content|editor|copywrit|writer|publishing|communications|marketing operations|newsletter|research)/i;
const EXCLUDE = /(software engineer|developer|clinical|nurse|physician|data engineer|sales representative|customer support|sales development)/i;
const MAX_AGE_DAYS = 30;
function dateMs(value) {
  if (!value) return NaN;
  if (typeof value === 'number') return value < 10000000000 ? value*1000 : value;
  const t = Date.parse(value);
  return Number.isFinite(t) ? t : NaN;
}
function scoreJob(job) {
  const title = job.title||'';
  const excerpt = String(job.excerpt||'');
  let score = 50;
  if (/content operations|content coordinator|editorial operations|content production|content manager/i.test(title)) score+=27;
  if (/copywriter|content writer|editor|marketing communications|newsletter|publishing/i.test(title)) score+=18;
  if (/AI|workflow|research|documentation|B2B|newsletter/i.test(title+' '+excerpt)) score+=9;
  if (/part.?time/i.test(job.employmentType||'')) score+=12;
  if (/contract/i.test(job.employmentType||'')) score+=7;
  if (/senior|director|head of/i.test(title)) score-=12;
  if (/video editor|media buyer|PPC specialist|paid ads/i.test(title)) score-=23;
  const period=String(job.salaryPeriod||'').toLowerCase();
  if (String(job.currency||'').toUpperCase()==='USD' && period==='hourly'){
    const cap=Number(job.maxSalary??job.minSalary);
    if (cap && cap < 6) score-=60;
    if (cap >= 10) score+=8;
  }
  return Math.min(98,Math.max(0,score));
}
function normalize(j) {
  const url=j.applicationLink || j.guid;
  if (!url || !/^https:\/\//i.test(url)) return null;
  const title=String(j.title||'').trim();
  if (!RX.test(title)||EXCLUDE.test(title)) return null;
  if (/full.?time/i.test(j.employmentType||'')&&!/part.?time/i.test(j.employmentType||'')) return null;
  const expiry=dateMs(j.expiryDate),published=dateMs(j.pubDate),now=Date.now();
  if(Number.isFinite(expiry)&&expiry < now) return null;
  if(Number.isFinite(published)&&now-published>MAX_AGE_DAYS*86400000) return null;
  if (Array.isArray(j.locationRestrictions)&&j.locationRestrictions.length){
    if (!j.locationRestrictions.some(l=>String(l.alpha2||l.code||l.name||'').toUpperCase()==='PH'||/philippine/i.test(String(l.name||'')))) return null;
  }
  const salary= j.minSalary||j.maxSalary ? [j.minSalary,j.maxSalary].filter(v=>v!=null).join('–')+' '+(j.currency||'')+' / '+(j.salaryPeriod||'unspecified'):'Not disclosed';
  const max=Number(j.maxSalary??j.minSalary);
  if ((j.currency||'').toUpperCase()==='USD'&&String(j.salaryPeriod).toLowerCase()==='hourly'&& max>0 && max < 6) return null;
  return {
    id:'himalayas:'+encodeURIComponent(String(j.guid||url)).slice(0,220),
    title,company:String(j.companyName||'Not disclosed'),pay:salary,
    hours:/part.?time/i.test(j.employmentType||'')?'Part time; confirm exact hours':'Contract/unspecified; confirm hours',
    updated:Number.isFinite(published)?new Date(published).toISOString().slice(0,10):'',
    url,source:'Himalayas',type:'Live discovery',
    fit:scoreJob(j),status:'New',
    verification:'Source currently lists this role; application form not independently checked',
    notes:String(j.excerpt||'').replace(/<[^>]*>/g,'').slice(0,420),
    workType:String(j.employmentType||''), expiry:Number.isFinite(expiry)?new Date(expiry).toISOString().slice(0,10):'',
    requiredReview:'Confirm PH eligibility, hours, pay and employer before applying.'
  };
}
export async function GET() {
  try {
    const responses=await Promise.allSettled(TERMS.map(async term=>{
      const q=new URL('https://himalayas.app/jobs/api/search');
      q.searchParams.set('q',term);
      q.searchParams.set('worldwide','true');
      q.searchParams.set('sort','recent');
      q.searchParams.set('page','1');
      const res=await fetch(q.toString(),{next:{revalidate:3600},headers:{'accept':'application/json'},signal:AbortSignal.timeout(11000)});
      if(!res.ok)throw Error('Himalayas HTTP '+res.status);
      const data=await res.json();
      return Array.isArray(data.jobs)?data.jobs:[];
    }));
    const successes=responses.filter(r=>r.status==='fulfilled');
    if(!successes.length)throw Error('The feed did not respond. Try again later.');
    const uniq=new Map();
    for(const r of successes){
      for(const raw of r.value){
        const job=normalize(raw);
        if(!job)continue;
        const k=(job.company+'|'+job.title).toLowerCase().replace(/[^a-z0-9]/g,'');
        if(!uniq.has(k)||job.fit>uniq.get(k).fit)uniq.set(k,job);
      }
    }
    const jobs=[...uniq.values()].sort((a,b)=>b.fit-a.fit||b.updated.localeCompare(a.updated)).slice(0,90);
    return Response.json({jobs,checkedAt:new Date().toISOString(),source:'Himalayas',sourceUrl:'https://himalayas.app/',terms:TERMS,queriesSuccessful:successes.length,notice:'Listings are from a provider feed updated approximately daily. Application availability, geography and hours require human confirmation.'},{headers:{'Cache-Control':'public, s-maxage=1800, stale-while-revalidate=1800'}});
  }catch(e){
    return Response.json({jobs:[],error:String(e?.message||e),checkedAt:new Date().toISOString()},{status:503});
  }
}
