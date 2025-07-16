'use client'

import { createContext, useContext, useState } from 'react'

// Simplified types without Supabase dependency
interface User {
  id: string
  email: string
}

interface Session {
  user: User
}

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
  const [loading, setLoading] = useState(false)

  const loginFn = async (email: string, password: string, _code?: string) => {
    setLoading(true)
    
    // Simulate login - replace with actual auth when Supabase is configured
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock successful login
    const mockUser: User = { id: '1', email }
    const mockSession: Session = { user: mockUser }
    
    setSession(mockSession)
    setLoading(false)
  }

  const logoutFn = async () => {
    setLoading(true)
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
