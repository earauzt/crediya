// Supabase client placeholder - to be configured when Supabase is set up
export const supabase = {
  auth: {
    getSession: () => Promise.resolve({ data: { session: null } }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithPassword: () => Promise.resolve({ error: new Error('Supabase not configured') }),
    signOut: () => Promise.resolve({ error: null }),
  }
}
