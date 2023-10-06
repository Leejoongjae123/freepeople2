'use client';
import React from 'react';
import {FcBullish,FcVoicePresentation,FcCurrencyExchange,FcAreaChart,FcMoneyTransfer} from 'react-icons/fc'
import {GiBarrel} from 'react-icons/gi'
import {AiFillGolden} from 'react-icons/ai'
import {FaPercent} from 'react-icons/fa'
import {mdOilBarrel} from 'react-icons/md'
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import Link from 'next/link';
import PresidentSlider from './PresidentSlider';
import axios from 'axios';

export default function President() {

  const [presidentRealmeter,setPresidentRealmeter] = useState([]);
  const [presidentRealmeterLoading, setPresidentRealmeterLoading] = useState(true);

  const [presidentNBS,setPresidentNBS] = useState([]);
  const [presidentNBSLoading, setPresidentNBSLoading] = useState(true);

  const [presidentbrief,setPresidentbrief] = useState([]);
  const [presidentbriefLoading, setPresidentbriefLoading] = useState(true);

  const [presidentpress,setPresidentpress] = useState([]);
  const [presidentpressLoading, setPresidentpressLoading] = useState(true);
  
  const [economyIndicators,setEconomyIndicators] = useState([]);
  const [economyIndicatorsLoading, setEconomyIndicatorsLoading] = useState(true);

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`);
      
      setPresidentbrief(response.data);
      setPresidentbriefLoading(false);
      console.log("loading완료1")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getPresidentNBS?page=1`);
      const jsonData=await response.json();
      setPresidentNBS(jsonData);
      setPresidentNBSLoading(false);
      console.log("loading완료2")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData5 = async () => {
    try {
      const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getEconomyStatus`);
      setEconomyIndicators(response.data);
      setEconomyIndicatorsLoading(false);
      console.log("loading완료5")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // const fetchData3 = async () => {
  //   try {
  //     const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`);
  //     const jsonData= await response.json()
  //     setPresidentbrief(jsonData);
  //     setPresidentbriefLoading(false);
  //     console.log("loading완료3")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // const fetchData4 = async () => {
  //   try {
  //     const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentpress?page=1`);
  //     const jsonData=await response.json()
  //     setPresidentpress(jsonData);
  //     setPresidentpressLoading(false);
  //     console.log("loading완료4")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // const fetchData5 = async () => {
  //   try {
  //     const response = await fetch(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getEconomyStatus`);
  //     const jsonData=await response.json()
  //     setEconomyIndicators(jsonData);
  //     setEconomyIndicatorsLoading(false);
  //     console.log("loading완료5")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // const fetchData1 = async () => {
  //   try {
  //     const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getpresidentbrief?page=1`);
  //     setPresidentbrief(response.data);
  //     setPresidentbriefLoading(false);
  //     console.log("loading완료3")
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };


  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData2(); // 함수를 호출하여 데이터를 가져옵니다.
    // fetchData3(); // 함수를 호출하여 데이터를 가져옵니다.
    // fetchData4(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData5(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);




  return (
    <>
      <div className="items-center mx-auto  lg:mx-0">
        <div className='flex items-center'>
            <FcVoicePresentation size='40'></FcVoicePresentation>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">국민/대통령</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            행정부처 관련 자료
            </p>
        </div>   
      </div>

      <section className="bg-white px-20">
        <div className="mx-auto ">

            <div className='border-t mt-6 pt-8'>
            <div>
              <h1 className=' text-2xl my-5 font-bold text-center'>리얼미터</h1>
              <PresidentSlider></PresidentSlider>
            </div>
            </div>
        </div>
      
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-1">
          <div className='truncate'>
            <h1 className='text-2xl font-bold text-center my-5'>대통령 브리핑</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>

            <div>
              <table className="table-fixed w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="w-3/4 text-lg px-6 py-3 text-center">
                        제목
                    </th>
                    <th scope="col" className="w-1/4px-6 text-lg py-3 text-center">
                        게시일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    presidentbrief.map((elem,index)=>{
                      return(
                        <tr key={index} className=" bg-white border-b">
                          <th scope="row" className="grid-cols-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          <a target='_blank' href={elem.url}><p className='whitespace-normal text-lg font-bold line-clamp-2'>{elem.title}</p></a>
                              <p className='text-base font-bold whitespace-normal line-clamp-2 text-left text-gray-700'>{elem.subtitle}</p>
                              <p className='whitespace-normal line-clamp-2 text-left text-gray-500'>{elem.contents}</p>
                          </th>
                          <td className="grid-col px-6 py-4 text-center">
                              {elem.regiDate}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className='text-right pr-5'>
              <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://www.president.go.kr/newsroom/briefing'>Read more</Link></p>
            </div>  
          </div>
          
          
          <div className='truncate'>
            <h1 className='text-2xl font-bold text-center my-5'>NBS</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg"></div>

            <div className='rounded-lg'>
              <table className="table-fixed w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="w-3/4 text-lg px-6 py-3 text-center">
                        제목
                    </th>
                    <th scope="col" className="w-1/4 text-lg px-6 py-3 text-center">
                        게시일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    presidentNBS.map((elem,index)=>{
                      return(
                        <tr key={index} className=" bg-white border-b ">
                          <th scope="row" className="grid-cols-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                              <p className='text-lg font-bold'><a target="_blank" href={elem.url}>{elem.title}</a></p>
                              
                              <p className='text-sm whitespace-normal text-gray-500 '>{elem.contents}</p>

                          </th>
                          <td className="grid-col truncate px-6 py-4 text-center">
                              {elem.regiDate}
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>

            </div>
            <div className='text-right pr-5'>
              <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='http://nbsurvey.kr'>Read more</Link></p>
            </div>  
          </div>                 
        
        </div>
        <div className="flex flex-col my-10 text-lg">
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-18">
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                
                <FcCurrencyExchange size='40'></FcCurrencyExchange>
              </div>

              <div className="ml-4">
                <h2 className="font-semibold">환율(USD)</h2>
                <p className="mt-2 text-lg font-bold text-cyan-600">{economyIndicators.exchange} <span className='text-xs text-gray-500 font-normal'>(원/달러)</span></p>
              </div>
              
            </div>
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg> */}
                <FcBullish size='40'></FcBullish>
              </div>

              <div className="ml-4">
                <h2 className="font-semibold">코스피</h2>
                <p className="mt-2 text-lg font-bold text-cyan-600">{economyIndicators.kospi}</p>
              </div>
              
            </div>
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                <FcAreaChart size='40'></FcAreaChart>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">코스닥</h2>
                <p className="mt-2 text-lg font-bold text-cyan-600">{economyIndicators.kosdaq}</p>
              </div>
            </div>

            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                <FcMoneyTransfer  size='40'></FcMoneyTransfer>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">CD금리(91일)</h2>
                <p className="mt-2 text-lg font-bold text-cyan-600">{economyIndicators.cdinterest} <span className='text-xs text-gray-500 font-normal'>(%/년)</span></p>
              </div>
            </div>

            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                <GiBarrel size='40'></GiBarrel>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">유가(두바이)</h2>
                <p className="mt-2 text-lg font-bold text-cyan-600">{economyIndicators.oil} <span className='text-xs text-gray-500 font-normal'>(달러/배럴)</span></p>
              </div>
            </div>

            
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                <AiFillGolden color='#FFd700' size='40'></AiFillGolden>
              </div>
              <div className="ml-4">
                <h2 className="font-semibold">금 시세</h2>
                <p className="mt-2 text-lg font-bold text-cyan-600">{economyIndicators.gold} <span className='text-xs text-gray-500 font-normal'>(달러/toz)</span></p>
              </div>
            </div>


          </div>
        </div>        
        <div className='text-right pr-5'>
          <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='https://finance.naver.com/'>Read more</Link></p>
        </div> 
      </section>
    </>

    

  )
}

