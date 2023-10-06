'use client'
import React from 'react'
import {signIn,signOut,useSession} from 'next-auth/react'
import { getServerSession } from 'next-auth'

export default async function LoginBtn() {
  
  const handleLogin=async()=>{
    signIn()
  }

  return (
    <button
    onClick={handleLogin}
    type="submit"
    className="flex justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    관리자 로그인
  </button>
    // <button >LoginBtn</button>
  )
}
