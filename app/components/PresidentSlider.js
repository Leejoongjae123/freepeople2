'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

export default function PresidentSlider() {
  const [presidentRealmeter,setPresidentRealmeter] = useState([]);
  const [presidentRealmeterLoading, setPresidentRealmeterLoading] = useState(true);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData1 = async () => {
      try {
        const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getPresidentRealmeter?page=1`);
        setPresidentRealmeter(response.data);
        setPresidentRealmeterLoading(false);
        console.log("loading리얼미터")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData1(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

      
    return (
      <div className="relative parent">
      
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        partialVisible={false}
        
      >
        {presidentRealmeter.map((elem, index) => {
          return (
            <div className="flex flex-col slider" key={index}>
              <div className="relative h-56">
                {/* <img className="object-cover overflow-hidden" src={elem.imageSrc} alt="movie" /> */}
                <Image src={elem.imageSrc} fill  className="object-cover"/>
              </div>
              <a href={elem.url} target="_blank">
              <p className="text-lg line-clamp-2 font-bold font-black ">
                {elem.title}
              </p>
              </a>
              <p className="text-right text-gray-500 text-sm">
                {elem.regiDate}
              </p>
            </div>
          );
        })}
        
      </Carousel>
      <div className='text-right pr-5'>
        <p className="text-base font-semibold text-blue-500 text-right"><Link target='_blank' className='z-50' href='http://www.realmeter.net/category/politics/'>Read more</Link></p>
      </div>  
    </div>

    
  )
}