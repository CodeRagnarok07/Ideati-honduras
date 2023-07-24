import { NextResponse } from 'next/server'
const api = process.env.NEXT_PUBLIC_API_GET

export async function GET() {
  
  const res= await fetch(api)
  const data = await res.json()
  
  return NextResponse.json( data )
}