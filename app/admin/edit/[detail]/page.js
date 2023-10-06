'use client'
import React, { useEffect, useState } from 'react'
// import { authOptions } from '@/pages/api/auth/[...nextauth]'
// import { authOptions } from '../../api/auth/[...nextauth]/route'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import axios from 'axios'
import { useRouter,usePathname } from 'next/navigation';
import Link from 'next/link';

export default function EditTopic(props) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  
  const router=useRouter()

  console.log(props.params.detail)
  let [firstOne,secondOne]=props.params.detail.split("_")

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getOnePostings', {
        params: {
          'category': firstOne,
          'id': secondOne
        },
        headers: {
          'accept': 'application/json'
        }
      });
      setTitle(response.data.title);
      setContents(response.data.contents);
      console.log("loading완료")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    fetchData()
  },[])

  const updateArticle = async () => {
    try {
      const response = await axios.post(
        'https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/updateOnePosting',
        '',
        {
          params: {
            'category': firstOne,
            'id': secondOne,
            'title': title,
            'contents': contents
          },
          headers: {
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      );
      console.log("loading완료")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = () => {
    console.log('수정 버튼이 클릭되었습니다.');
    updateArticle()
    router.push('/admin/list')
  };


  const handleTitleChange = (e) => {
    // 입력된 텍스트를 상태 변수에 저장
  setTitle(e.target.value);
};

const handleContentsChange = (e) => {
  // 입력된 텍스트를 상태 변수에 저장
setContents(e.target.value);
};
  
  return (
    <>
    
      <div className='flex'>
      <div className='w-64'>

      </div>
      <div className='flex-1 bg-white'>
        
        <div className='h-24'></div>
        <div className="space-y-12 mx-10">
          <div className=" border-gray-900/10 pb-12">
            <h2 className="text-4xl font-semibold leading-7 text-gray-900">게시글 작성</h2>
            <p className="py-5 text-3xl mt-1 leading-6 text-gray-600">포스팅하실 글의 내용을 작성해주세요</p>

            <div className="mt-10 gap-x-6 gap-y-8">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  제목
                </label>
                <div className="">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                      이미지 파일
                  </label>
                  <div className='flex gap-x-3'>
                      <input
                      type="text"
                      name="first-name"
                      id="first-name"
											
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                      Find
                      </button>                    
                  </div>

                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  내용
                </label>
                <div className="">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="h-72 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    value={contents}
                    onChange={handleContentsChange}
                  />
                  </div>
                  </div>


            </div>
          </div>

          <div className="pb-12">

            <div className="mt-10 space-y-10">
              {/* <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">글 종류</legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">게시할 글의 종류를 선택하세요</p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                      카테고리1
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    카테고리2
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                      카테고리3
                    </label>
                  </div>
                </div>
              </fieldset> */}
            </div>
          </div>
        </div>

        <div className="my-10 flex items-center justify-end gap-x-6 mx-10">

          
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleButtonClick}
          >
          수정하기
          </button>
          
        </div>
      
      </div>

    </div>


    
    
  </>
  )
}
