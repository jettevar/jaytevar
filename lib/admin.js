import crypto from 'crypto';
import { cookies } from 'next/headers';

const COOKIE = 'jay_admin_session';

function tokenFor(password) {
  const secret = process.env.ADMIN_PASSWORD || '';
  return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

export function validPassword(password) {
  const expected = process.env.ADMIN_PASSWORD || '';
  return Boolean(expected && password && password === expected);
}

export async function setAdminSession() {
  const token = tokenFor('jay-admin');
  const store = await cookies();
  store.set(COOKIE, token, { httpOnly:true, secure:process.env.NODE_ENV==='production', sameSite:'lax', path:'/', maxAge:60*60*24*7 });
}

export async function clearAdminSession() { const store = await cookies(); store.delete(COOKIE); }

export async function isAdmin() { const store = await cookies(); const token=store.get(COOKIE)?.value; return Boolean(token && token===tokenFor('jay-admin')); }
