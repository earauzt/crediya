'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase/client'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  login: (email: string, password: string, code?: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('AuthProvider missing')
  return ctx
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const loginFn = async (email: string, password: string, code?: string) => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setLoading(false)
      throw error
    }
    if (code) {
      const { error: otpError } = await supabase.auth.verifyOtp({ token: code, type: 'totp' })
      if (otpError) {
        setLoading(false)
        throw otpError
      }
    }
    const { data } = await supabase.auth.getSession()
    setSession(data.session)
    setLoading(false)
  }

  const logoutFn = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    setSession(null)
    setLoading(false)
  }

  const value: AuthContextType = {
    user: session?.user ?? null,
    session,
    loading,
    login: loginFn,
    logout: logoutFn,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
