'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// import ApexCharts from "react-apexcharts";
import Review from './components/Review'
import JijidoReal from './components/JijidoReal'
import JijidoNBS from './components/JijidoNBS'
import {FcVoicePresentation} from 'react-icons/fc'
import { Element } from 'react-scroll' 
import LoginBtn from './components/LoginBtn'
import President from './components/President'
import Parliament from './components/Parliament'
import { FcDocument } from 'react-icons/fc'
import Policy from './components/Policy'
import Election from './components/Election'
import Test from './components/Test'
import { Song_Myung } from 'next/font/google'
import { East_Sea_Dokdo } from 'next/font/google'

const SongMyung=Song_Myung({subsets:['latin'],weight:['400']})
const EastSeaDokdo=East_Sea_Dokdo({subsets:['latin'],weight:['400']})

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

export default function Home() {

  return (
    <div>
    
    <Element name="0"></Element>
    <div className="bg-white py-1 lg:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  max-w-2xl text-center mt-16">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">정치/경제 종합 정보 제공</h2> */}
          <p style={EastSeaDokdo.style} className="mt-3 font-bold text-6xl leading-8 text-sky-900">
            오직 민중을 위한
          </p>
          <h1 className="my-2 lg:my-5 font-bold tracking-tight text-gray-900 lg:text-6xl ">
            <p style={SongMyung.style} className="text-9xl">미 래 민 중</p>
          </h1>
          
        </div>
      </div>
    </div>


   
    <div>
      <Test></Test>
    </div>  

    <Element name="1"></Element>
    <div id="mySection" className="mx-auto lg:px-20 pb-10 bg-gray-100">
      <Review></Review>
    </div>

    <Element name="2"></Element>
    <div className="bg-white px-10 lg:px-20 py-10">
      <President></President>
    </div>
    
    <Element name="3"></Element>
    <div className="bg-gray-100 px-10 py-10 lg:px-20">
      <Parliament></Parliament>
    </div>
    
    

    
    <Element name="4"></Element>
    <div className="bg-white-100 px-10 lg:px-20 py-10">
      <Policy></Policy>
    </div>


    <Element name="5"></Element>
    <div className="bg-gray-100 px-10 lg:px-20 py-10">
      <Election></Election>
    </div>
    
    
    </div>
  

    
    
    
  )
}












