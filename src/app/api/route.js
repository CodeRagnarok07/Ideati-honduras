import { NextResponse } from 'next/server'
 
export async function GET() {
//   const res = await fetch('https://url-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })

 
  return NextResponse.json( {data:"hello"} )
}