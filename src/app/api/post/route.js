import { NextResponse } from 'next/server'
const ApiPost = process.env.NEXT_PUBLIC_API_POST

export async function POST(request) {
  const body = await request.json()


   
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify(body);
   
   let response = await fetch(ApiPost, { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
  //  let data = await response.text();
   


  return NextResponse.json(response)
}