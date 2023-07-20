"use client"

import '@/styles/tailwind.css'

import Navbar from '@/app/Navbar'
import { useState } from 'react'
import FormLogin from './FormLogin'

// export const metadata = {
//   title: 'ideati honduras',
//   description: 'Generated by create next app',
// }



export default function RootLayout({ children }) {

  const [userState, setUserState] = useState(null)



  return (
    <html lang="en">
      <body >

        <Navbar  userdata={userState} setUser={setUserState}/>
        {children}


        {userState == null &&
          <div className='flex flex-col justify-start pt-11 items-center min-h-screen'>
            <div class="w-full px-5 max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

              <div class="flex flex-col items-center pb-10">
                {/* <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="" alt="Bonnie image" /> */}
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <FormLogin oldState={userState} setUser={setUserState} />
              </div>
            </div>
          </div>
        }


      </body>
    </html>
  )
}