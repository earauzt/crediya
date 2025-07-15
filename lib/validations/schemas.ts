import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string().uuid().optional(),
  email: z.string().email(),
  name: z.string().min(1).optional(),
  created_at: z.string().optional()
})

export const CategorySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  description: z.string().optional(),
  created_at: z.string().optional()
})

export const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.number().nonnegative(),
  category_id: z.string().uuid().nullable(),
  created_at: z.string().optional()
})

export const CreditRequestSchema = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid(),
  product_id: z.string().uuid().nullable(),
  amount: z.number().nonnegative(),
  status: z.string().optional(),
  created_at: z.string().optional()
})

export const TransactionSchema = z.object({
  id: z.string().uuid().optional(),
  user_id: z.string().uuid(),
  credit_request_id: z.string().uuid().nullable(),
  amount: z.number().nonnegative(),
  type: z.string(),
  status: z.string().optional(),
  created_at: z.string().optional()
})

export const PaginationSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().optional()
})
