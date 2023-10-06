'use client'
import React from 'react';
import {FcDocument,FcDownload} from 'react-icons/fc'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import Link from 'next/link';


export default function Policy() {

  const [kdipolicy,setKdipolicy] = useState([]);
  const [kdipolicyLoading, setKdipolicyLoading] = useState(true);

  const [kdistatus,setKdistatus] = useState([]);
  const [kdistatusLoading, setKdistatusLoading] = useState(true);

  const [yyd,setYyd] = useState([]);
  const [yydLoading, setYydLoading] = useState(true);

  const [minju,setMinju] = useState([]);
  const [minjuLoading, setMinjuLoading] = useState(true);


  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData1 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getKDIpolicy?page=1`);
        setKdipolicy(response.data);
        setKdipolicyLoading(false);
        console.log("loading완료1")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getKDIstatus?page=1`);
        setKdistatus(response.data);
        setKdistatusLoading(false);
        console.log("loading완료2")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData3 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getyyd?page=1`);
        setYyd(response.data);
        setYydLoading(false);
        console.log("loading완료3")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchData4 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getminju?page=1`);
        setMinju(response.data);
        setMinjuLoading(false);
        console.log("loading완료4")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData2(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData3(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData4(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  console.log('kdistatus:',kdistatus)

  return (
    <>
      <div className="mx-auto flex-col lg:mx-0">
        <div className='flex items-center'>
            <FcDocument size='40'></FcDocument>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">정책/이슈</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            주요 정책 및 동향
            </p>
        </div>   
      </div>
      
      <div className=' py-10 lg:px-20'>
      <div className="grid grid-cols-1 gap-8 mb-6 lg:mb-16 md:grid-cols-1">
        <div className='flex flex-col'>
          <div className="relative items-center bg-gray-50 rounded-lg shadow grid grid-cols-1">
            
            <div className="col-span-2 p-5">
            <div className='absolute flex'>
              <img className="opacity-10 p-2 z-0 object-contain" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/KDI-removebg-preview.png" alt="Jese Avatar"/>
            </div>
            
              <div>
                <h3 className='text-2xl text-center font-bold my-5'>KDI 정책자료</h3>
              </div>
              <ul className="space-y-4 z-50 text-left text-gray-500 dark:text-gray-400">
                {kdistatus.map((elem,index)=>{
                  return(
                    <li key={index} className="w-full items-center space-x-3">

                      
                      <div className='grid grid-cols-5'>
                        <div className='flex items-center space-x-3 col-span-3'>
                          <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                          </svg>  
                          <span className='flex text-lg text-black font-bold whitespace-normal'>
                          <p><a target='_blank' href={elem.url}>{elem.title}</a></p>
                          <div><a href={elem.downloadUrl}><FcDocument size='30'></FcDocument></a></div> 
                          </span>
                        </div>
                        <div className='col-span-1'>
                          <p className='font-bold text-gray-6'>{elem.category}</p>
                        </div>
                        <div className='col-span-1'>
                          <span className='whitespace-normal'>{elem.regiDate}</span>
                        </div>
                      </div>

                      
                    </li>
                  )
                })}
              </ul>
                  
            </div>

          </div> 
          <div className='text-right my-3 pr-5'>
            <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://eiec.kdi.re.kr/policy/materialList.do?topic=P'>Read more</Link></p>
          </div>  
        </div>
        
        <div>
          <div className="relative items-center bg-gray-50 rounded-lg shadow grid grid-cols-1">
            
              {/* <img className="p-2 w-1/6 absolute top-0 left-0 object-contain" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/KDI-removebg-preview.png" alt="Jese Avatar"/> */}
            
            <div className="col-span-2 p-5">
              <div>
                <h3 className='text-2xl text-center font-bold my-5'>KDI 동향자료</h3>
              </div>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {kdipolicy.map((elem,index)=>{
                    return(
                      <li key={index} className="w-full items-center space-x-3">

                        
                        <div className='grid grid-cols-5'>
                          <div className='flex items-center space-x-3 col-span-3'>
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>  
                            <span className='flex text-lg text-black font-bold whitespace-normal'>
                            <p><a target='_blank' href={elem.url}>{elem.title}</a></p>
                            <div><a href={elem.downloadUrl}><FcDocument size='30'></FcDocument></a></div> 
                            </span>
                          </div>
                          <div className='col-span-1'>
                            <p className='font-bold text-gray-6'>{elem.category}</p>
                          </div>
                          <div className='col-span-1'>
                            <span className='whitespace-normal'>{elem.regiDate}</span>
                          </div>
                        </div>

                        
                      </li>
                    )
                  })}

                
              </ul>                
            </div>
          </div> 
          <div className='text-right my-3 pr-5'>
            <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://eiec.kdi.re.kr/policy/materialList.do?topic=O'>Read more</Link></p>
          </div>  
        </div>
        <div>
          <div className="relative h-full items-center bg-gray-50 rounded-lg shadow grid grid-cols-1">
            
            {/* <img className="w-1/6 p-2 absolute top-0 left-0 object-contain" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/yeoyuido-removebg-preview.png" alt="Michael Avatar"/> */}
            


            <div className="col-span-2 p-5">
              <div>
                <h3 className='text-2xl text-center font-bold my-5'>여의도연구원</h3>
              </div>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
              {yyd.map((elem,index)=>{
                    return(
                      <li key={index} className="w-full items-center space-x-3">

                        
                        <div className='grid grid-cols-5'>
                          <div className='flex items-center space-x-3 col-span-3'>
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>  
                            <span className='flex text-lg text-black font-bold whitespace-normal'>
                            <p><a target='_blank' href={elem.url}>{elem.title}</a></p>
                            <div><a href={elem.downloadUrl}><FcDocument size='30'></FcDocument></a></div> 
                            </span>
                          </div>
                          <div className='col-span-1'>
                            <p className='font-bold text-gray-6'>{elem.category}</p>
                          </div>
                          <div className='col-span-1'>
                            <span className='whitespace-normal'>{elem.regiDate}</span>
                          </div>
                        </div>

                        
                      </li>
                    )
                  })}              

                
              </ul>                
            </div>
          </div>
          <div className='text-right my-3 pr-5'>
            <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://www.ydi.or.kr/board/list/data020102/1'>Read more</Link></p>
          </div>   
          </div>

          <div>
          <div className="relative h-full items-center bg-gray-50 rounded-lg shadow grid grid-cols-1">
            
            {/* <img className="absolute p-2 top-0 left-0 w-1/4 object-contain" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/minju-removebg-preview.png" alt="Sofia Avatar"/> */}
            
            <div className="col-span-2 p-5">
              <div>
                <h3 className='text-2xl text-center font-bold my-5'>민주연구원</h3>
              </div>
              <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                {minju.map((elem,index)=>{
                      return(
                        <li key={index} className="w-full items-center space-x-3">

                          
                          <div className='grid grid-cols-5'>
                            <div className='flex items-center space-x-3 col-span-4'>
                              <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                              </svg>  
                              <span className='flex text-lg text-black font-bold whitespace-normal'>
                              <p><a target='_blank' href={elem.url}>{elem.title}</a></p>
                              <div><a href={elem.downloadUrl}><FcDocument size='30'></FcDocument></a></div> 
                              </span>
                            </div>
                            <div className='col-span-1'>
                              <span className='whitespace-normal'>{elem.regiDate}</span>
                            </div>
                          </div>

                          
                        </li>
                      )
                    })}   

              </ul>              
            </div>
            
          </div>  
          <div className='text-right my-3 pr-5'>
            <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://idp.theminjoo.kr/board/lists/briefing'>Read more</Link></p>
          </div>  
        </div>
      </div>          
      </div>
    

    
    </>
  )
}
