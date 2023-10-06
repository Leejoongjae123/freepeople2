'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { FcNext,FcPrevious } from 'react-icons/fc'

export default function Statistics() {
    const [koreaBank,setKoreaBank] = useState([]);
    const [koreaBankLoading, setKoreaBankLoading] = useState(true);
    const [koreaBankNo,setKoreaBankNo]=useState(1);
    const [koreaBankNoList,setKoreaBankNoList]=useState([1,2,3,4,5]);
    const [keyword,setKeyword]=useState("")
    const [buttonSearch,setButtonSearch]=useState(1)
    const fetchData = async () => {
      
      try {
          const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getKoreaBank?page=${koreaBankNo}&keyword=${keyword}`);
          setKoreaBank(response.data.data);
          setKoreaBankLoading(false);
          console.log("loading완료66666")
          console.log(response.data)
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };

    useEffect(()=>{
      fetchData();
    },[koreaBankNo,buttonSearch])

    const handleLinkClick1 = (event, number) => {
        event.preventDefault(); // 기본 링크 동작 방지
        setKoreaBankNo(number);
      };
    console.log(keyword)
    
    console.log('koreaBank:',koreaBank)
    const handleNextClick1 = () => {
    const updatedList = koreaBankNoList.map(number => number + 5);
    if (koreaBankNoList[4]!=10){
      setKoreaBankNoList(updatedList)
      setKoreaBankNo(updatedList[0])
    }
    
    
    };
    const handlePreviousClick1 = () => {
        const updatedList = koreaBankNoList.map(number => number -5 );
        if (koreaBankNo>=6){
          setKoreaBankNoList(updatedList)
          setKoreaBankNo(updatedList[0])
        }else{
          console.log('error')
        }
      };
    
    const handleSearch=(event,number)=>{
      event.preventDefault();
      setButtonSearch(buttonSearch + 1);
    }

    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setKeyword(newValue);
    };
  
    return (

    <div className="w-full mx-auto lg:px-20">
        <div className="py-8">
            <div className="flex flex-col justify-between w-full md:flex-row">
                <div className="md:text-center md:my-0">
                  <h2 className="text-2xl font-bold leading-tight">
                      한국은행 100대 지표
                  </h2>
                </div>
                <div className="">
                  <form className="flex flex-col justify-center md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <div className="my-5 md:my-0">
                      <input type="text" value={keyword} onChange={handleInputChange} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent" placeholder="검색어"/>
                    </div>
                    <button onClick={handleSearch} className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-cyan-600" type="submit">
                        검색
                    </button>
                  </form>
                </div>
            </div>
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className=" px-5 py-3 text-lg font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                        카테고리
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-lg font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                        이름
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-lg font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                        값
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-lg font-bold text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                        시점
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                  {koreaBank.map((elem,index)=>{
                                    return(
                                      <tr className='text-lg font-bold w-full' key={index}>
                                        <td className="w-1/4 px-5 py-5 text-md bg-white border-b border-gray-200">
                                          <p className="text-gray-900 text-base whitespace-no-wrap text-center">
                                            {elem.CLASS_NAME}  
                                          </p>
                                        </td>
                                        <td className="w-1/4 px-5 py-5 text-md bg-white border-b border-gray-200">
                                          <p className="text-gray-900 text-base whitespace-no-wrap text-center">
                                          {elem.KEYSTAT_NAME}  
                                          </p>
                                        </td>
                                        <td className="w-1/4 px-5 py-5 text-md bg-white border-b border-gray-200">
                                          <p className="text-cyan-600 text-base font-bold  whitespace-no-wrap text-center ">
                                          {elem.DATA_VALUE} <span className='text-gray-600 font-medium'>({elem.UNIT_NAME})</span>
                                          </p>

                                        </td>
                                        <td className="w-1/4 px-5 py-5 text-md bg-white border-b border-gray-200">
                                          <p className="text-gray-900 text-base whitespace-no-wrap text-center">
                                          {elem.CYCLE}  
                                          </p>
                                        </td>
                                      </tr>
                                    )
                                  })}              
                            </tbody>
                        </table>
                        <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                            <div className="flex items-center">
                            <button onClick={() => handlePreviousClick1()} className={`flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100`} ><FcPrevious size={10}></FcPrevious></button>
                                <button value={1} onClick={(e) => handleLinkClick1(e,koreaBankNoList[0])} type="button" className={`${koreaBankNo==koreaBankNoList[0]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `} >
                                  {koreaBankNoList[0]}
                                </button>
                                <button value={1} onClick={(e) => handleLinkClick1(e,koreaBankNoList[1])} type="button" className={`${koreaBankNo==koreaBankNoList[1]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>
                                {koreaBankNoList[1]}
                                </button>
                                <button value={1} onClick={(e) => handleLinkClick1(e,koreaBankNoList[2])} type="button" className={`${koreaBankNo==koreaBankNoList[2]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>
                                {koreaBankNoList[2]}
                                </button>
                                <button value={1} onClick={(e) => handleLinkClick1(e,koreaBankNoList[3])} type="button" className={`${koreaBankNo==koreaBankNoList[3]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>
                                {koreaBankNoList[3]}
                                </button>
                                <button value={1} onClick={(e) => handleLinkClick1(e,koreaBankNoList[4])} type="button" className={`${koreaBankNo==koreaBankNoList[4]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>
                                {koreaBankNoList[4]}
                                </button>
                                <button onClick={() => handleNextClick1()} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "><FcNext size={10}></FcNext></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}
