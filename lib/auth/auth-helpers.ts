import { supabase } from '@/lib/supabase/client'

export async function login(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password })
}

export async function verify2FA(code: string) {
  return supabase.auth.verifyOtp({ token: code, type: 'totp' })
}

export async function logout() {
  return supabase.auth.signOut()
}

export async function getSession() {
  const { data } = await supabase.auth.getSession()
  return data.session
}
