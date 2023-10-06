'use client'
import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { FcNext,FcPrevious } from 'react-icons/fc'
import axios from 'axios'
import {HiOutlineTrash} from 'react-icons/hi'
import { fetchData } from 'next-auth/client/_utils'

export default function TopicsList() {
  const [inputStates, setInputStates] = useState([true, false, false]);
  const [categoryIndex,setCategoryIndex]=useState(0)
  const [postingData,setPostingData]=useState([])
  const [no,setNo]=useState(1);
  const [isLoading,setIsloading]=useState(true)
  const [noList,setNoList]=useState([1,2,3,4,5]);

  const categoryName=['정치경제현안','미래민중논평','칼럼연구']
  
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getAllPostings?category=${categoryIndex}&page=${no}`);
      setPostingData(response.data);
      setIsloading(false);
      console.log("loading완료")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.

    fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
  }, [no,categoryIndex]);
  

  const handleInputChange = (index) => {
    // 클릭된 input 요소의 상태를 토글
    const newInputStates = [false,false,false];
    newInputStates[index] = !newInputStates[index];
    setInputStates(newInputStates);
    setCategoryIndex(index)
  };
  
  const handleLinkClick1 = (event, number) => {
    event.preventDefault(); // 기본 링크 동작 방지
    setNo(number);
  };
  
  console.log('inputStates:',inputStates)


  const deleteData=async (topic,title)=>{
    try {
      const response = await axios.delete('https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/removeArticles', {
        params: {
          'topic': topic,
          'title': title
        },
        headers: {
          'accept': 'application/json'
        }
      });
      console.log("삭제완료")
      fetchData()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  console.log("postingData:",postingData)

  const handleDelete = (event,title) => {
    event.preventDefault(); // 기본 링크 동작 방지
    let topic=""
    if(inputStates[0]===true){
      topic='bigkinds'
    } else if (inputStates[1]===true){
      topic='futurePosting'
    } else{
      topic='columnPosting'
    }
    
    deleteData(topic,title)
    

    console.log("topic:",topic,'title:',title)
  };


  return (
    <>
        <div className="flex">
          {inputStates.map((isChecked, index) => (
            <div key={index} className="flex items-center mr-4">
              <input checked={isChecked}  onChange={() => handleInputChange(index)} id="inline-1-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{categoryName[index]}</label>
            </div>
          ))}
        </div>   
        {postingData.map((elem,index)=>{
          return (
          <div key={index} className="flex w-full items-center bg-white border border-gray-200 rounded-lg shadow ">
            {categoryIndex===0?(
              <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={elem.imageUrl} alt=""/>
            ):(
              <div></div>
            )}            
            <div className="flex flex-col justify-between p-4 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elem.title}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elem.contents}</p>
            </div>
            <div className='flex gap-2'>
            <div className="text-red-400">
              <button onClick={(e)=>{handleDelete(e,elem.title)}}>
                <div><HiOutlineTrash size={24}></HiOutlineTrash></div>
              </button>
              
            </div>
            <Link value={elem.id} href={`/admin/edit/${categoryIndex}_${elem.id}`}>
              <div><HiPencilAlt size={24}></HiPencilAlt></div>
            </Link>
            </div>
          </div>
          )
        })}

        <div className='flex mx-auto'>
        <ul className="flex">
          <li>
            <button onClick={() => handlePreviousClick1()} className={`flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100`} ><FcPrevious size={10}></FcPrevious></button>
          </li>
          <li>
            <button value={1} onClick={(e) => handleLinkClick1(e,noList[0])} className={`${no==noList[0]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{noList[0]}</button>
          </li>
          <li>
            <button value={1} onClick={(e) => handleLinkClick1(e, noList[1])} className={`${no==noList[1]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{noList[1]}</button>
          </li>
          <li>
            <button value={1} onClick={(e) => handleLinkClick1(e, noList[2])} className={`${no==noList[2]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{noList[2]}</button>
          </li>
          <li>
            <button value={1} onClick={(e) => handleLinkClick1(e, noList[3])} className={`${no==noList[3]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{noList[3]}</button>
          </li>
          <li>
            <button value={1} onClick={(e) => handleLinkClick1(e, noList[4])} className={`${no==noList[4]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{noList[4]}</button>
          </li>
          <li>
            <button onClick={() => handleNextClick1()} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "><FcNext size={10}></FcNext></button>
          </li>
        </ul>          
        </div>
      


    {/* </div> */}
    </>
  )
}
