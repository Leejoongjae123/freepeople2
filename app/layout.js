
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'


export default function RootLayout({ children }) {

  
  
  return (
    <html lang="kr">

      <body className="">
      
        <Navbar></Navbar>
          {children}
        {/* <Provider> */}
          <Footer></Footer>
        {/* </Provider> */}
      </body>
    </html>
  )
}
