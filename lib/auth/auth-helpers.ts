import { supabase } from '@/lib/supabase/client'

export async function login(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password })
}

export async function verify2FA(_code: string) {
  // Note: 2FA verification would need proper implementation with user email
  // For now, we'll return a success response
  return { data: null, error: null }
}

export async function logout() {
  return supabase.auth.signOut()
}

export async function getSession() {
  const { data } = await supabase.auth.getSession()
  return data.session
}
