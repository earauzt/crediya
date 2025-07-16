// Auth helpers without Supabase dependency - to be updated when Supabase is configured

export async function login(email: string, password: string) {
  // Mock login response
  return { 
    data: { user: { id: '1', email } }, 
    error: null 
  }
}

export async function verify2FA(_code: string) {
  // Mock 2FA verification
  return { data: null, error: null }
}

export async function logout() {
  // Mock logout
  return { error: null }
}

export async function getSession() {
  // Mock session
  return null
}
