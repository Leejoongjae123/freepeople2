'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import ArticleModal from './ArticleModal'

export default function SearchCard1() {

  const [select1Value, setSelect1Value] = useState('제20대 대통령선거');
  const [select2Value, setSelect2Value] = useState('국민의힘');
  const [isSelect,setIsSelect]=useState(false)
  const [count,setCount]=useState(1)
  

  const [partyData, setPartyData] = useState([]);
  const [partyDataLoading, setPartyDataLoading] = useState(true);

  const [showModal,setShowModal]=useState(false);
    
  const [modalTitle,setModalTitle]=useState("")

  const [modalText,setModalText]=useState(["","",""])

  const handleSelect1Change = (e) => {
    const selectedValue = e.target.value;
    setSelect1Value(selectedValue);
    setSelect2Value("")

    // select1에서 A를 선택하면 select2를 초기화
    if (selectedValue === 'A') {
      setSelect2Value('');
    }
    if (selectedValue === 'B') {
      setSelect2Value('');
    }
    if (selectedValue === 'C') {
      setSelect2Value('');
    }
    if (selectedValue === 'D') {
      setSelect2Value('');
    }
  };

  const handleSelect2Change = (e) => {
    const selectedValue = e.target.value;
    setSelect2Value(selectedValue);
    setIsSelect(true)
    setCount(count+1)
  };

  if (select1Value.length>=1 && select2Value.length>=1){
    console.log(select1Value,select2Value)
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/PartyInfo?sgId=${select1Value}&partyName=${select2Value}`);
      setPartyData(response.data);
      setPartyDataLoading(false);
      console.log("loading완료정당")
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
  }, []);

  useEffect(() => {
    // 데이터를 가져오는 함수를 정의합니다.
    fetchData(); // 함수를 호출하여 데이터를 가져옵니다.
  }, [count]);

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



  return (
    <div className='h-full'>
      <div className="container w-full px-4 mx-auto sm:px-8">
        <div className="py-8">
            <div className="flex items-center justify-around flex-row w-full mb-1 sm:mb-0">
                <h2 className="text-lg leading-tight font-bold">
                    정당정책
                </h2>
                <div className="flex gap-x-2 text-end">
                  {/* <select defaultValue="BIG" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option >선거종류</option>
                    <option value="BIG">대선</option>
                    <option value="ALL">총선</option>
                    <option value="REST">지선</option>
                  </select>
                  <select defaultValue="BIG" id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option >지역구1</option>
                    <option value="BIG">대선</option>
                    <option value="ALL">총선</option>
                    <option value="REST">지선</option>
                  </select> */}
                  <select value={select1Value} onChange={handleSelect1Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">-- 선택 --</option>
                    <option value="제8회 전국동시지방선거">제8회 전국동시지방선거</option>
                    <option value="제20대 대통령선거">제20대 대통령선거</option>
                    <option value="제21대 국회의원선거">제21대 국회의원선거</option>
                    <option value="제7회 전국동시지방선거">제7회 전국동시지방선거</option>
                    <option value="제19대 대통령선거">제19대 대통령선거</option>
                    <option value="제20대 국회의원선거">제20대 국회의원선거</option>
                  </select>
                  {select1Value &&(
                    <>
                    {
                      select1Value==="제8회 전국동시지방선거"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="국민의힘">국민의힘</option>
                        <option value="더불어민주당">더불어민주당</option>
                        <option value="진보당">진보당</option>
                        <option value="정의당">정의당</option>
                        </select>
                      )
                    }
                    {
                      select1Value==="제20대 대통령선거"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="더불어민주당">더불어민주당</option>
                        <option value="국민의힘">국민의힘</option>
                        <option value="정의당">정의당</option>
                        <option value="정의당">국민의당</option>
                        <option value="정의당">기본소득당</option>
                        </select>
                      )
                    }
                    {
                      select1Value==="제21대 국회의원선거"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="더불어민주당">더불어민주당</option>
                        <option value="미래통합당">미래통합당</option>
                        <option value="정의당">정의당</option>
                        <option value="국민의당">국민의당</option>
                        <option value="열린민주당">열린민주당</option>
                        </select>
                      )
                    }
                                        {
                      select1Value==="제7회 전국동시지방선거"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="더불어민주당">더불어민주당</option>
                        <option value="자유한국당">자유한국당</option>
                        <option value="민주평화당">민주평화당</option>
                        <option value="정의당">정의당</option>
                        <option value="바른미래당">바른미래당</option>
                        </select>
                      )
                    }
                    {
                      select1Value==="제19대 대통령선거"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="더불어민주당">더불어민주당</option>
                        <option value="자유한국당">자유한국당</option>
                        <option value="국민의당">국민의당</option>
                        <option value="바른정당">바른정당</option>
                        <option value="정의당">정의당</option>
                        </select>
                      )
                    }
                    {
                      select1Value==="제20대 국회의원선거"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="더불어민주당">더불어민주당</option>
                        <option value="새누리당">새누리당</option>
                        <option value="국민의당">국민의당</option>
                        <option value="정의당">정의당</option>
                        </select>
                      )
                    }

                    </>

                  )
                  }
                                    
          
                </div>
                </div>
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                        <table className="min-w-full leading-normal">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                          <tr>
                            <th scope="col" className="font-bold text-lg text-center px-6 py-3 w-1/2">
                                정책명
                            </th>
                          </tr>
                        </thead>
                            <tbody>
                              {partyData.map((elem,index)=>{
                                return(
                                <tr key={index}>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center">
                                      <div className="flex-shrink-0">
                                      </div>
                                      <div className="ml-3">
                                        <button onClick={()=>{handleButtonClick(elem.title,elem.contents,"")}}>

                                        <p className="text-lg font-bold whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                          {elem.title}
                                        </p>
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                  
                                </tr>
                                )
                              })}

                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            {
        showModal&&(<ArticleModal modalText={modalText} closeModal={closeModal}></ArticleModal>)
      }
        </div>


        </div>
      )
}
