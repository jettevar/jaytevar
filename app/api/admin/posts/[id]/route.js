import { NextResponse } from 'next/server';
import { isAdmin } from '../../../../../lib/admin';
import { getSupabaseAdmin } from '../../../../../lib/supabase';

export async function PUT(req,{params}){ if(!await isAdmin()) return NextResponse.json({error:'Unauthorized'},{status:401}); const supabase=getSupabaseAdmin(); const body=await req.json(); const {data,error}=await supabase.from('posts').update({title:body.title,excerpt:body.excerpt||'',body:body.body,image_url:body.image_url||null,published_at:body.published_at||new Date().toISOString()}).eq('id',(await params).id).select().single(); if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json(data); }
export async function DELETE(req,{params}){ if(!await isAdmin()) return NextResponse.json({error:'Unauthorized'},{status:401}); const supabase=getSupabaseAdmin(); const {error}=await supabase.from('posts').delete().eq('id',(await params).id); if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.json({ok:true}); }
