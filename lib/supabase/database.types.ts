export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          category_id: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          category_id?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          category_id?: string | null
          created_at?: string | null
        }
        Relationships: [{
          foreignKeyName: "products_category_id_fkey"
          columns: ["category_id"]
          referencedRelation: "categories"
          referencedColumns: ["id"]
        }]
      }
      credit_requests: {
        Row: {
          id: string
          user_id: string
          product_id: string | null
          amount: number
          status: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          product_id?: string | null
          amount: number
          status?: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string | null
          amount?: number
          status?: string
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "credit_requests_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "credit_requests_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          credit_request_id: string | null
          amount: number
          type: string
          status: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          credit_request_id?: string | null
          amount: number
          type: string
          status?: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          credit_request_id?: string | null
          amount?: number
          type?: string
          status?: string
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_credit_request_id_fkey"
            columns: ["credit_request_id"]
            referencedRelation: "credit_requests"
            referencedColumns: ["id"]
          }
        ]
      }
    }
  }
}

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"]
