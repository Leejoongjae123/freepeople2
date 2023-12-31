import React from 'react'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import LoginBtn from '../components/LoginBtn'

export default function Admin() {
  return (
    <>
    <div className='w-full h-32'></div>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            구글 아이디로 로그인 해주세요
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그인
              </button>
            </div>
          
        </div>
    </div>    
    </>
  )
}
