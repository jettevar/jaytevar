import { NextResponse } from 'next/server';
import { setAdminSession, validPassword } from '../../../../lib/admin';
export async function POST(req){
  const { password } = await req.json();
  if (!validPassword(password)) return NextResponse.json({error:'Invalid password'}, {status:401});
  await setAdminSession();
  return NextResponse.json({ok:true});
}
