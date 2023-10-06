import React from 'react'
import Link from 'next/link'
export default function JijidoNBS() {
  
  const jijidoNBS={
    date: '2023-08-17',
    title: '전국지표조사 리포트 제103호(2023년 8월 3주)',
    imageSrc: 'https://i0.wp.com/nbsurvey.kr/wp-content/uploads/2020/08/logo_2-e1597095556507.png?fit=822%2C359',
    groupName:'대통령지지도(NBS)',
    readMore:'http://nbsurvey.kr/',
    href: '#',
  }
  
  return (
    <>
      <div className="group relative">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">{jijidoNBS.groupName}</h2>
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
          <img
          src={jijidoNBS.imageSrc}
          alt={jijidoNBS.imageAlt}
          className="h-full w-full object-cover object-center"
          />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
              {jijidoNBS.date}
          </h3>
          <p className="text-base font-semibold text-gray-900">{jijidoNBS.title}</p>
          <p className="text-base font-semibold text-blue-500 underline mt-2 text-right"><Link target='_blank' className='z-50' href={jijidoNBS.readMore}>Read more</Link></p>
      </div>
    </>
  )
}
