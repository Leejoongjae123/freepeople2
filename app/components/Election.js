import React from 'react';
import SearchCard1 from './SearchCard1';
import SearchCard2 from './SearchCard2';
import SliderKOSIS from './SliderKOSIS';
import { FcStatistics } from "react-icons/fc";
import Statistics from './Statistics';
import Policy from '../components/Policy';

export default function Election() {
  return (
    <div>
      <div className="mx-auto flex-col lg:mx-0">
        <div className='flex items-center'>
            <FcStatistics size='40'></FcStatistics>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">통계/선거</h2>
        </div>
        <div>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            과거 선거/공약 및 통계 자료
            </p>
        </div>   
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center lg:px-10'>
        <SearchCard1></SearchCard1>
        <SearchCard2></SearchCard2>
        
      </div>
      <div className='justify-center lg:mx-20'>
        <SliderKOSIS></SliderKOSIS>
      </div>    
      <div className='w-full'>
        <Statistics></Statistics>
      </div>
      {/* <div className='justify-center mx-20'>
      
      </div> */}

    </div>
  )
}
