'use client'
import React, { useReducer } from 'react'
import LoginBtn from './LoginBtn';
import Link from 'next/link';
import ArticleModal from './ArticleModal';
import AppModal from './ReactModal';
import FooterModal from './FooterModal';
import ServiceModal from './ServiceModal';
import { getServerSession } from 'next-auth'
// import { authOptions } from '../../api/auth/[...nextauth]/route''
import { usePathname } from 'next/navigation';



export default function Footer() {

  // let session=await getServerSession(authOptions)
  const pathname = usePathname()
  console.log('usePathname:',pathname)
  let isBase=pathname==="/"
  console.log('isbase:',isBase)

    return (
    <div>
      {isBase&&(
        <div>
      
    
      
        <footer className="bg-gray-500 dark:bg-gray-900">
          <div className="px-20">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div className='mx-auto'>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">소개</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        {/* <Link href="/about" className="hover:underline">미래민중은</Link> */}
                        <FooterModal></FooterModal>
                      </li>
                      <li className="mb-4">
                        {/* <Link href="/service" className="hover:underline">서비스범위</Link> */}
                        <ServiceModal></ServiceModal>
                      </li>
                  </ul>
              </div>
              <div className='mx-auto'>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">제휴협력 및 연구의뢰</h2>
                  <ul className="text-black dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="http://www.realmeter.net/%EC%A1%B0%EC%82%AC%EC%9D%98%EB%A2%B0/" target='_blank' className="hover:underline">리얼미터</a>
                      </li>
                      <li className="mb-4">
                          <a href="https://www.gallup.co.kr/inquiry/askResearch.asp" target='_blank' className="hover:underline">갤럽</a>
                      </li>
                  </ul>
              </div>
              <div className='mx-auto'>
                  <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">관리자센터</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                      <LoginBtn></LoginBtn>
                        


                      </li>
                      <li>
                      




                          <button
                          type="submit"
                          className="flex justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                        <a href='/admin/list'>
                        관리자 사이트로 이동
                        </a>
                        </button>

                 
                      

                      
                      </li>
                  </ul>

              </div>
          </div>


          </div>
      
      </footer>
    </div>
      )}
    </div> 
    
    )
}
