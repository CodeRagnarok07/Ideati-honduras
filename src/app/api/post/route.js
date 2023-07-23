import { NextResponse } from 'next/server'
const ApiPost = process.env.NEXT_PUBLIC_API_POST

export async function POST(request) {
  const body = await request.json()

  const responseApi = await fetch(ApiPost, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }
  });
  console.log(responseApi.status);
  const res = await responseApi.json();

  return NextResponse.json(res)
}