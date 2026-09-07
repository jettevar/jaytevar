import { getSupabaseAdmin } from './supabase';

export async function getPosts() {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];
  const { data } = await supabase.from('posts').select('*').order('published_at', { ascending: false });
  return data || [];
}
