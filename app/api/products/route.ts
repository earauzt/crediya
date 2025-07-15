import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { ProductSchema, PaginationSchema } from '@/lib/validations/schemas'
import { z } from 'zod'
import type { Database } from '@/lib/supabase/database.types'

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const { searchParams } = new URL(req.url)
  const params = PaginationSchema.parse({
    page: searchParams.get('page'),
    limit: searchParams.get('limit'),
    search: searchParams.get('search') ?? undefined
  })
  const from = (params.page - 1) * params.limit
  let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, from + params.limit - 1)

  if (params.search) {
    query = query.ilike('name', `%${params.search}%`)
  }

  const { data, error, count } = await query
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ data, count, page: params.page, limit: params.limit })
}

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const json = await req.json()
  const parse = ProductSchema.safeParse(json)
  if (!parse.success) {
    return NextResponse.json({ error: parse.error.flatten() }, { status: 400 })
  }
  const { data, error } = await supabase
    .from('products')
    .insert(parse.data)
    .select()
    .single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

export async function PUT(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const json = await req.json()
  const UpdateSchema = ProductSchema.extend({ id: z.string().uuid() })
  const parse = UpdateSchema.safeParse(json)
  if (!parse.success) {
    return NextResponse.json({ error: parse.error.flatten() }, { status: 400 })
  }
  const { data, error } = await supabase
    .from('products')
    .update(parse.data)
    .eq('id', parse.data.id)
    .select()
    .single()
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

export async function DELETE(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ success: true })
}
