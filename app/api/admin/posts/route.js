import { NextResponse } from 'next/server';
import { isAdmin } from '../../../../lib/admin';
import { getSupabaseAdmin } from '../../../../lib/supabase';

export async function GET(){
  if(!await isAdmin()) return NextResponse.json({error:'Unauthorized'},{status:401});
  const supabase=getSupabaseAdmin(); if(!supabase) return NextResponse.json([]);
  const {data,error}=await supabase.from('posts').select('*').order('published_at',{ascending:false});
  if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json(data||[]);
}
export async function POST(req){
  if(!await isAdmin()) return NextResponse.json({error:'Unauthorized'},{status:401});
  const body=await req.json(); const supabase=getSupabaseAdmin();
  if(!supabase) return NextResponse.json({error:'Supabase is not configured'},{status:500});
  const {data,error}=await supabase.from('posts').insert({title:body.title,excerpt:body.excerpt||'',body:body.body,image_url:body.image_url||null,published_at:body.published_at||new Date().toISOString()}).select().single();
  if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json(data);
}
