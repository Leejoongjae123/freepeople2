'use client'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar></Sidebar>
        {children}
      </body>
    </html>
  )
}
