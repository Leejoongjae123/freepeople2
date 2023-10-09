"use client";
import React from "react";
import { FcDocument, FcVoicePresentation } from "react-icons/fc";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Link from "next/link";
import "./test.css";

export default function Parliament() {
  const [gukhimarticle, setGukhimarticle] = useState([]);
  const [gukhimarticleLoading, setGukhimarticleLoading] = useState(true);

  const [minjuarticle, setMinjuarticle] = useState([]);
  const [minjuarticleLoading, setMinjuarticleLoading] = useState(true);

  const [parliamentCreator, setParliamentCreator] = useState([]);
  const [parliamentCreatorLoading, setParliamentCreatorLoading] =
    useState(true);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    const fetchData3 = async () => {
      try {
        const response = await axios.get(
          `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getgukhimarticle?page=1`
        );

        const articles = response.data;
        // 그룹화할 크기를 정의합니다.
        const groupSize = 2;

        // 그룹화된 배열을 생성합니다.
        const groupedArticles = [];
        for (let i = 0; i < articles.length; i += groupSize) {
          groupedArticles.push(articles.slice(i, i + groupSize));
        }

        setGukhimarticle(groupedArticles);
        setGukhimarticleLoading(false);
        console.log("loading완료3");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData4 = async () => {
      try {
        const response = await axios.get(
          `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getminjuarticle?page=1`
        );

        const articles = response.data;
        // 그룹화할 크기를 정의합니다.
        const groupSize = 2;

        // 그룹화된 배열을 생성합니다.
        const groupedArticles = [];
        for (let i = 0; i < articles.length; i += groupSize) {
          groupedArticles.push(articles.slice(i, i + groupSize));
        }

        setMinjuarticle(groupedArticles);
        setMinjuarticleLoading(false);
        console.log("loading완료4");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData5 = async () => {
      try {
        const response = await axios.get(
          `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/getParliamentCreator?page=1`
        );

        const articles = response.data;
        // 그룹화할 크기를 정의합니다.
        const groupSize = 2;

        // 그룹화된 배열을 생성합니다.
        const groupedArticles = [];
        for (let i = 0; i < articles.length; i += groupSize) {
          groupedArticles.push(articles.slice(i, i + groupSize));
        }
        setParliamentCreator(groupedArticles);
        setParliamentCreatorLoading(false);
        console.log("loading완료5");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData3(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData4(); // 함수를 호출하여 데이터를 가져옵니다.
    fetchData5(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  return (
    <>
      <div className="mx-auto flex-col lg:mx-0">
        <div className="flex items-center">
          <FcVoicePresentation size="40"></FcVoicePresentation>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            국회/정당
          </h2>
        </div>
        <div>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            논평 및 서면 브리핑
          </p>
        </div>
      </div>

      <div className="pt-10 grid gap-8 md:grid-cols-1 px-20">
        <div className="">
          <div className="">
            <h1 className="mb-5 text-2xl font-bold text-center">국민의힘</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
              <div className="flex">
                {/* <img className="opacity-10 absolute inset-0 w-full h-full object-contain z-0 backdrop-blur-md" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/gukhim-removebg-preview.png"></img> */}
                <table className="table-fixed w-full text-sm text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="text-center text-lg px-6 py-3 w-1/2"
                      >
                        제목
                      </th>
                      <th
                        scope="col"
                        className="text-center text-lg px-6 py-3 w-1/4"
                      >
                        작성일
                      </th>
                      <th
                        scope="col"
                        className="text-center text-lg px-6 py-3 w-1/2"
                      >
                        제목
                      </th>
                      <th
                        scope="col"
                        className="text-center text-lg px-6 py-3 w-1/4"
                      >
                        작성일
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {gukhimarticle.map((elem, index) => {
                      return (
                        <tr key={index} className="bg-white border-b ">
                          <td
                            scope="row"
                            className="whitespace-normal px-6 py-4 font-medium text-gray-900 "
                          >
                            <a target="_blank" href={elem[0].url}>
                              <span className="text-lg font-bold line-clamp-2">
                                {elem[0]["title"]}
                              </span>
                            </a>
                            <span className="text-base text-cyan-600">
                              {elem[0]["category"]}
                            </span>
                          </td>
                          <td className="text-center truncate w-1/4 px-6 py-4">
                            {elem[0]["regiDate"]}
                          </td>
                          <td
                            scope="row"
                            className="whitespace-normal px-6 py-4 font-medium text-gray-900 "
                          >
                            <a target="_blank" href={elem[1].url}>
                              <p className="text-lg font-bold line-clamp-2">
                                {elem[1]["title"]}
                              </p>
                            </a>
                            <span className="text-base text-cyan-600">
                              {elem[1]["category"]}
                            </span>
                          </td>
                          <td className="text-center truncate w-1/4 px-6 py-4">
                            {elem[1]["regiDate"]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-right my-3 pr-5">
              <p className="text-base font-semibold text-blue-500 text-right">
                <Link
                  target="_blank"
                  className="z-50"
                  href="https://www.peoplepowerparty.kr/news/comment/BBSDD0001"
                >
                  Read more
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center mx-auto">
            <h1 className="mb-5 text-2xl font-bold text-center">
              더불어민주당
            </h1>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <div className="flex">
              {/* <img className="opacity-10 absolute inset-0 w-full h-full object-contain z-0 backdrop-blur-md" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/dubul-removebg-preview.png"></img> */}
              <table className="table-fixed w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg text-center px-6 py-3 w-1/2"
                    >
                      제목
                    </th>
                    <th
                      scope="col"
                      className="text-lg text-center px-6 py-3 w-1/4"
                    >
                      작성일
                    </th>
                    <th
                      scope="col"
                      className="text-lg text-center px-6 py-3 w-1/2"
                    >
                      제목
                    </th>
                    <th
                      scope="col"
                      className="text-lg text-center px-6 py-3 w-1/4"
                    >
                      작성일
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {minjuarticle.map((elem, index) => {
                    return (
                      <tr key={index} className="bg-white border-b ">
                        <td
                          scope="row"
                          className="whitespace-normal px-6 py-4 font-medium text-gray-900"
                        >
                          <a target="_blank" href={elem[0].url}>
                            <p className="text-lg font-bold line-clamp-2">
                              {elem[0]["title"]}
                            </p>
                            <span className="text-base text-cyan-600">
                              {elem[0]["category"]}
                            </span>
                          </a>
                        </td>
                        <td className="text-center truncate w-1/4 px-6 py-4">
                          {elem[0]["regiDate"]}
                        </td>
                        <td
                          scope="row"
                          className="whitespace-normal px-6 py-4 font-medium text-gray-900"
                        >
                          <a target="_blank" href={elem[1].url}>
                            <p className="text-lg font-bold line-clamp-2">
                              {elem[1]["title"]}
                            </p>
                          </a>
                          <span className="text-base text-cyan-600">
                            {elem[1]["category"]}
                          </span>
                        </td>
                        <td className="text-center truncate w-1/4 px-6 py-4">
                          {elem[1]["regiDate"]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-right my-3 pr-5">
            <p className="text-base font-semibold text-blue-500 text-right">
              <Link
                target="_blank"
                className="z-50"
                href="https://theminjoo.kr/main/sub/news/list.php?brd=11"
              >
                Read more
              </Link>
            </p>
          </div>
        </div>

        <div className="table-container1">
          <h1 className="mb-5 text-2xl font-bold text-center">
            국회입법조사처
          </h1>
          <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <div className="w-full">
              {/* <img className="z-0 absolute inset-0 w-full h-full object-contain backdrop-blur-md" src="https://freepeopleimage.s3.ap-northeast-2.amazonaws.com/gukip-removebg-preview.png"></img> */}

              <div className="flex z-10">
                <table className="table-auto table-fixed w-full text-sm text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="text-lg text-center  px-6 py-3 w-1/2"
                      >
                        제목
                      </th>
                      <th
                        scope="col"
                        className="text-lg text-center  px-6 py-3 w-1/4"
                      >
                        작성일
                      </th>
                      <th
                        scope="col"
                        className="text-lg text-center  px-6 py-3 w-1/2"
                      >
                        제목
                      </th>
                      <th
                        scope="col"
                        className="text-lg text-center  px-6 py-3 w-1/4"
                      >
                        작성일
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {
                        parliamentCreator.map((elem,index)=>{
                          return (
                          <tr key={index} className="bg-white border-b z-50 ">
                            <td scope="row" className="truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <a className='z-50' target='_blank' href={elem[0].url}><p className='text-lg font-bold line-clamp-2'>{elem[0]['title']}</p><span className='text-base text-cyan-600'>{elem[0]['writer']}</span></a>
                            </td>
                            <td className="text-center truncate w-1/4 px-6 py-4">
                                {elem[0]['regiDate']}
                            </td>
                            <td scope="row" className="truncate px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <a className='z-50' target='_blank' href={elem[1].url}><p className='text-lg font-bold line-clamp-2'>{elem[1]['title']}</p><span className='text-base text-cyan-600'>{elem[1]['writer']}</span></a>
                            </td>
                            <td className="text-center truncate w-1/4 px-6 py-4">
                                {elem[1]['regiDate']}
                            </td>
                        </tr>
                          )
                        })
                      } */}
                    {parliamentCreator.map((elem, index) => {
                      return (
                        <tr key={index} className="bg-white border-b ">
                          <td
                            scope="row"
                            className="whitespace-normal px-6 py-4 font-medium text-gray-900"
                          >
                            <a target="_blank" href={elem[0].url}>
                              <p className="text-lg font-bold line-clamp-2">
                                {elem[0]["title"]}
                              </p>
                              <span className="text-base text-cyan-600">
                                {elem[0]["writer"]}
                              </span>
                            </a>
                          </td>
                          <td className="text-center truncate w-1/4 px-6 py-4">
                            {elem[0]["regiDate"]}
                          </td>
                          <td
                            scope="row"
                            className="whitespace-normal px-6 py-4 font-medium text-gray-900"
                          >
                            <a target="_blank" href={elem[1].url}>
                              <p className="text-lg font-bold line-clamp-2">
                                {elem[1]["title"]}
                              </p>
                            </a>
                            <span className="text-base text-cyan-600">
                              {elem[1]["writer"]}
                            </span>
                          </td>
                          <td className="text-center truncate w-1/4 px-6 py-4">
                            {elem[1]["regiDate"]}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right my-3 pr-5">
          <p className="text-base font-semibold text-blue-500 text-right">
            <Link
              target="_blank"
              className="z-50"
              href="https://www.nars.go.kr/report/list.do?cmsCode=CM0043"
            >
              Read more
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
