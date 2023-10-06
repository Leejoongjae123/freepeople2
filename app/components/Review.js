'use client'
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import {FcKindle} from 'react-icons/fc'
import './styles.css'
import ArticleModal from './ArticleModal'
import { Element } from 'react-scroll'
import CardSkeleton from './CardSkeleton'
import { FcNext,FcPrevious } from 'react-icons/fc'

export default function Review(){
    
    const [bigKindsData, setBigKindsData] = useState([]);
    const [bigKindsLoading, setBigKindsLoading] = useState(true);
    const [bigKindsNo,setBigKindsNo]=useState(1);
    const [bigKindsNoList,setBigKindsNoList]=useState([1,2,3,4,5]);

    const [futureData, setFutureData] = useState([]);
    const [futureLoading, setFutureLoading] = useState(true);
    const [futureNo,setFutureNo]=useState(1);
    const [futureNoList,setFutureNoList]=useState([1,2,3,4,5]);

    const [columnData, setColumnData] = useState([]);
    const [columnLoading, setColumnLoading] = useState(true);
    const [columnNo,setColumnNo]=useState(1);
    const [columnNoList,setColumnNoList]=useState([1,2,3,4,5]);

    const [showModal,setShowModal]=useState(false);
    
    const [modalTitle,setModalTitle]=useState("")
    const [modalText,setModalText]=useState(["","",""])
    
    useEffect(() => {
      // 데이터를 가져오는 함수를 정의합니다.
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getBigKinds?page=${bigKindsNo}`);
          setBigKindsData(response.data[0]);
          setBigKindsLoading(false);
          console.log("loading완료")
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
    }, [bigKindsNo]);

    useEffect(() => {
      // 데이터를 가져오는 함수를 정의합니다.
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getFuturePosting?page=${futureNo}`);
          setFutureData(response.data);
          setFutureLoading(false);
          console.log("loading완료")
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
    }, [futureNo]);


    useEffect(() => {
      // 데이터를 가져오는 함수를 정의합니다.
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getColumnPosting?page=${columnNo}`);
          setColumnData(response.data);
          setColumnLoading(false);
          console.log("loading완료")
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
    }, [columnNo]);
    
    const handleLinkClick1 = (event, number) => {
      event.preventDefault(); // 기본 링크 동작 방지
      setBigKindsNo(number);
    };
    const handleLinkClick2 = (event, number) => {
      event.preventDefault(); // 기본 링크 동작 방지
      setFutureNo(number);
    };

    const handleLinkClick3 = (event, number) => {
      event.preventDefault(); // 기본 링크 동작 방지
      setColumnNo(number);
    };
    const handleNextClick1 = () => {
      const updatedList = bigKindsNoList.map(number => number + 5);
      
      setBigKindsNoList(updatedList)
      setBigKindsNo(updatedList[0])
    };
    const handleNextClick2 = () => {
      const updatedList = futureNoList.map(number => number + 5);
      
      setFutureNoList(updatedList)
      setFutureNo(updatedList[0])
    };
    const handleNextClick3 = () => {
      const updatedList = columnNoList.map(number => number + 5);
      
      setColumnNoList(updatedList)
      setColumnNo(updatedList[0])
    };
    const handlePreviousClick1 = () => {
      const updatedList = bigKindsNoList.map(number => number -5 );
      if (bigKindsNo>=6){
        setBigKindsNoList(updatedList)
        setBigKindsNo(updatedList[0])
      }else{
        console.log('error')
      }
    };
    const handlePreviousClick2 = () => {
      const updatedList = futureNoList.map(number => number -5 );
      if (futureNo>=6){
        setFutureNoList(updatedList)
        setFutureNo(updatedList[0])
      }else{
        console.log('error')
      }
    };
    const handlePreviousClick3 = () => {
      const updatedList = columnNoList.map(number => number -5 );
      if (columnNo>=6){
        setColumnNoList(updatedList)
        setColumnNo(updatedList[0])
      }else{
        console.log('error')
      }
    };
    
    //모달창 켜고 끄는 부분
    const toggleModal = () => {
      setShowModal(!showModal);
    };

    const closeModal = () => {
      setShowModal(false);
    };

    const handleButtonClick = (title,contents,imageUrl) => {
      console.log(title)
      console.log(contents)
      console.log(imageUrl)
      setModalText([title,contents,imageUrl])
      toggleModal()
    };

    console.log("modaltitle:",modalTitle)


    return(
      <>
      <Element name="1"></Element>
      <div className="w-full bg-gray-100 py-10">
      <div className="mx-auto sm:py-2" >
        {/* 헤더부분 */}
        <div className="items-center mx-auto lg:mx-0">
          <div className='flex'>
            <FcKindle size='40'></FcKindle>
            <h2 className="font-bold tracking-tight text-gray-900 text-2xl md:text-4xl">컬럼/연구</h2>
          </div>
          <div className=''>
            <p className="mt-2 pb-5 text-lg leading-8 text-gray-600 border-b border-gray-200">
              미래민중 논평 및 컬럼
            </p>
          </div>
          
        </div>

        
        <div className='flex flex-col justify-center  pt-10 '>
        <div className='lg:px-20'>
        {
              bigKindsLoading?(
                <div className='flex w-full h-full'> 
                  <Spinner></Spinner>
                </div> 
                  
              ):(
                <>
                <div className= 'min-h-fit bg-white border border-gray-200 rounded-lg shadow'>
                <h1 className='text-2xl font-bold text-center my-5'>정치경제현안분석</h1>
                <div className='grid grid-cols-2 items-center'>
                  <div className='flex justify-center'>
                    <img className="w-2/3 object-cover overflow-hidden rounded-t-lg" src={bigKindsData.imageUrl} alt="" />
                  </div>
                  <div className="">
                    <button onClick={()=>{handleButtonClick(bigKindsData.title,bigKindsData.contents,bigKindsData.imageUrl)}}>
                      <h5 className="text-center mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{bigKindsData.title}</h5>
                    </button>
                    <p className="mb-3 text-base font-normal text-gray-700 dark:text-gray-400">{bigKindsData.contents}</p>
                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{bigKindsData.regiDate}</p>
                  </div>
                </div> 
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="https://shop-phinf.pstatic.net/20221220_60/1671512155404m34vw_JPEG/72647989066429637_1719202779.jpg?type=m510" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                <div className='flex justify-center my-3'>
                  <div className=''>
                  <ul className="flex">
                    <li>
                      <button onClick={() => handlePreviousClick1()} className={`flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 rounded-l-lg`} ><FcPrevious size={10}></FcPrevious></button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick1(e,bigKindsNoList[0])} className={`${bigKindsNo==bigKindsNoList[0]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{bigKindsNoList[0]}</button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick1(e, bigKindsNoList[1])} className={`${bigKindsNo==bigKindsNoList[1]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{bigKindsNoList[1]}</button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick1(e, bigKindsNoList[2])} className={`${bigKindsNo==bigKindsNoList[2]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{bigKindsNoList[2]}</button>
                    </li>
                    {/* <li>
                      <a href="#" aria-current="" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li> */}
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick1(e, bigKindsNoList[3])} className={`${bigKindsNo==bigKindsNoList[3]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{bigKindsNoList[3]}</button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick1(e, bigKindsNoList[4])} className={`${bigKindsNo==bigKindsNoList[4]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{bigKindsNoList[4]}</button>
                    </li>
                    <li>
                      <button onClick={() => handleNextClick1()} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "><FcNext size={10}></FcNext></button>
                    </li>
                  </ul>
                </div>
                </div>
                </div>
                </>
              )
            }
        </div>
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-5 lg:px-20  pt-6 mt-6 lg:mx-0 lg:grid-cols-1">
            {/* 두번째 섹션 */}
            
              {futureLoading?(
              <div className='flex w-full h-full'> 
                <Spinner></Spinner>
              </div> 
              ):(
              <div className='flex h-full flex-col bg-white border border-gray-200 rounded-lg shadow'>
                <h1 className='text-2xl font-bold text-center my-5'>미래민중 논평</h1>
                <div className='flex flex-col h-full justify-center'>
                  <ul className="grid w-full justify-start px-10 grid-rows-5 gap-4 items-center">
                    
                    {futureData.map((elem,index)=>(
                        <li key={index*111} className="w-full pb-3 mx-auto h-32 sm:pb-4 border-b-2 ">
                        <div className="grid grid-cols-4 items-center space-x-4">
                          <div className="col-span-3">
                            <button onClick={()=>{handleButtonClick(elem.title,elem.contents,"")}}>
                            <p className="text-left text-lg font-bold text-gray-900 dark:text-white">
                              {elem.title}
                            </p>
                            </button>
                            {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                              {elem.contents}
                            </p> */}
                            <div className="col-span-1">
                              <p className="line-clamp-2 text-base text-gray-500 dark:text-gray-400">
                                {elem.contents}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-1 text-sm text-center text-gray-900 dark:text-white">
                              {elem.regiDate}
                          </div>
                        </div>
                      </li>   
                    ))       
                    }
                  </ul>
                  <div className='flex justify-center my-3'>
                    <ul className="inline-flex -space-x-px text-sm">
                      <li>
                        <button onClick={() => handlePreviousClick2()} className={`flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 rounded-l-lg`}><FcPrevious size={10}></FcPrevious> </button>
                      </li>
                      <li>
                        <button value={1} onClick={(e) => handleLinkClick2(e,futureNoList[0])} className={`${futureNo==futureNoList[0]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{futureNoList[0]}</button>
                      </li>
                      <li>
                        <button value={1} onClick={(e) => handleLinkClick2(e, futureNoList[1])} className={`${futureNo==futureNoList[1]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{futureNoList[1]}</button>
                      </li>
                      <li>
                        <button value={1} onClick={(e) => handleLinkClick2(e, futureNoList[2])} className={`${futureNo==futureNoList[2]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{futureNoList[2]}</button>
                      </li>
                      <li>
                        <button value={1} onClick={(e) => handleLinkClick2(e, futureNoList[3])} className={`${futureNo==futureNoList[3]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{futureNoList[3]}</button>
                      </li>
                      <li>
                        <button value={1} onClick={(e) => handleLinkClick2(e, futureNoList[4])} className={`${futureNo==futureNoList[4]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{futureNoList[4]}</button>
                      </li>
                      <li>
                        <button onClick={() => handleNextClick2()} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "><FcNext size={10}></FcNext></button>
                      </li>
                    </ul>
                  </div>
                </div>  
                </div>
                )}
                               


            {/* 세번째 섹션 */}
            
              {futureLoading?(
                <div className='flex w-full h-full'> 
                  <Spinner></Spinner>
                </div> 
              ):(
              <div className='flex flex-col bg-white border border-gray-200 rounded-lg shadow '>
              <h1 className='text-2xl font-bold text-center my-5'>칼럼 논평</h1>
              <div className='flex flex-col justify-center h-full'>
                <ul className="grid h-full justify-start px-10 grid-rows-5 gap-4 items-center">
                  
                  {columnData.map((elem,index)=>(
                      <li key={index*111} className="w-full pb-3 mx-auto h-32 sm:pb-4 border-b-2">
                      <div className="grid grid-cols-4 items-center space-x-4">

                        <div className="col-span-3">
                          <button onClick={()=>{handleButtonClick(elem.title,elem.contents,"")}}>
                          <p className="line-clamp-2 text-left text-lg font-bold text-gray-900  dark:text-white">
                            {elem.title}
                          </p>
                          </button>
                          {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                            {elem.contents}
                          </p> */}
                          <div>
                            <p className="line-clamp-2 text-base text-gray-500 dark:text-gray-400">
                              {elem.contents}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-1 text- text-center text-gray-900 dark:text-white">
                            {elem.regiDate}
                        </div>
                      </div>
                    </li>   
                  ))       
                  }
                </ul>
                <div className='flex justify-center my-3'>
                  <ul className="inline-flex -space-x-px text-sm">
                    <li>
                      <button onClick={() => handlePreviousClick3()} className={`flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 rounded-l-lg`} ><FcPrevious size={10}></FcPrevious></button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick3(e,columnNoList[0])} className={`${columnNo==columnNoList[0]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{columnNoList[0]}</button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick3(e, columnNoList[1])} className={`${columnNo==columnNoList[1]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{columnNoList[1]}</button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick3(e, columnNoList[2])} className={`${columnNo==columnNoList[2]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{columnNoList[2]}</button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick3(e, columnNoList[3])} className={`${columnNo==columnNoList[3]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{columnNoList[3]}</button>
                    </li>
                    <li>
                      <button value={1} onClick={(e) => handleLinkClick3(e, columnNoList[4])} className={`${columnNo==columnNoList[4]?('text-blue-500 font-bold'):('text-gray-500')} flex items-center justify-center px-3 h-8 leading-tightbg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 `}>{columnNoList[4]}</button>
                    </li>
                    <li>
                      <button onClick={() => handleNextClick3()} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "><FcNext size={10}></FcNext></button>
                    </li>
                  </ul>
                </div>
              </div>  
              </div>
              )}
                               
                               

        </div>
        </div>
        
      </div>
      
      {
        showModal&&(<ArticleModal modalText={modalText} closeModal={closeModal}></ArticleModal>)
      }
      
    </div>
    </>
    )
  }