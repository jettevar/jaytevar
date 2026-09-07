import { NextResponse } from 'next/server';
import { isAdmin } from '../../../../lib/admin';
import { getSupabaseAdmin } from '../../../../lib/supabase';

export async function POST(req){
  if(!await isAdmin()) return NextResponse.json({error:'Unauthorized'},{status:401});
  const supabase=getSupabaseAdmin(); if(!supabase) return NextResponse.json({error:'Supabase is not configured'},{status:500});
  const form=await req.formData(); const file=form.get('file'); if(!file) return NextResponse.json({error:'No file'},{status:400});
  const ext=(file.name.split('.').pop()||'jpg').toLowerCase(); const path=`${Date.now()}-${crypto.randomUUID()}.${ext}`;
  const buffer=Buffer.from(await file.arrayBuffer());
  const {error}=await supabase.storage.from('blog-images').upload(path,buffer,{contentType:file.type||'image/jpeg',upsert:false});
  if(error) return NextResponse.json({error:error.message},{status:500});
  const {data}=supabase.storage.from('blog-images').getPublicUrl(path); return NextResponse.json({url:data.publicUrl});
}
