'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import ArticleModal from './ArticleModal'

export default function SearchCard1() {

  const [select1Value, setSelect1Value] = useState('대선');
  const [select2Value, setSelect2Value] = useState('제20대 대통령선거');
  const [select3Value, setSelect3Value] = useState('서울특별시');
  const [select4Value, setSelect4Value] = useState('종로구');
  const [select4List, setSelect4List] = useState([]);

  


  const [isSelect,setIsSelect]=useState(false)
  const [count,setCount]=useState(1)
  

  const [electionResult, setElectionResult] = useState({'result':[]});
  const [electionResultLoading, setElectionResultLoading] = useState(true);

  const [showModal,setShowModal]=useState(false);
    
  const [modalTitle,setModalTitle]=useState("")

  const [modalText,setModalText]=useState(["","",""])

  const handleSelect1Change = (e) => {
    const selectedValue = e.target.value;
    setSelect1Value(selectedValue);
    setSelect2Value('')  
    setSelect3Value('');
    setSelect4Value('');
    setIsSelect(false)
    
  };

  const handleSelect2Change = (e) => {
    const selectedValue = e.target.value;
    setSelect2Value(selectedValue);
    setIsSelect(false)

  };

  const handleSelect3Change = (e) => {
    const selectedValue = e.target.value;
    setSelect3Value(selectedValue);
    setIsSelect(false)
    if(select1Value==="지선"){
      setCount(count+1)
    }
    
  };

  

  const handleSelect4Change = (e) => {
    const selectedValue = e.target.value;
    setSelect4Value(selectedValue);
    setIsSelect(true)
    setCount(count+1)


  };

  console.log(select1Value,select2Value,select3Value,select4Value)

  const fetchData = async () => {
    try {
      
      let url=`https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/ElectionResult?sgName=${select2Value}&sdName=${select3Value}&wiwName=${select4Value}`
      
      const response = await axios.get(url);
      
      setElectionResult(response.data);
      setElectionResultLoading(false);
      console.log("loading완료개표결과")
      console.log('electionResult:',electionResult)
    } catch (error) {
      
      setElectionResult({'result':[]});
      setElectionResultLoading(false);
      console.log("loading실패개표결과")
      
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
    setModalText([title,contents,imageUrl])
    toggleModal()
  };

  


  const region1=['서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시', '세종특별자치시', '경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주특별자치도']
  const region2={'서울특별시': ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구'], '부산광역시': ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '기장군', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구'], '대구광역시': ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'], '인천광역시': ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'], '광주광역시': ['동구', '서구', '남구', '북구', '광산구'], '대전광역시': ['동구', '중구', '서구', '유성구', '대덕구'], '울산광역시': ['중구', '남구', '동구', '북구', '울주군'], '세종특별자치시': ['세종특별자치시'], '경기도': ['수원시장안구', '수원시권선구', '수원시팔달구', '수원시영통구', '성남시수정구', '성남시중원구', '성남시분당구', '의정부시', '안양시만안구', '안양시동안구', '부천시', '광명시', '평택시', '양주시', '동두천시', '안산시상록구', '안산시단원구', '고양시덕양구', '고양시일산동구', '고양시일산서구', '과천시', '의왕시', '구리시', '남양주시', '오산시', '화성시', '시흥시', '군포시', '하남시', '파주시', '여주시', '이천시', '용인시처인구', '용인시수지구', '용인시기흥구', '안성시', '김포시', '광주시', '포천시', '연천군', '양평군', '가평군'], '강원도': ['춘천시', '원주시', '강릉시', '동해시', '삼척시', '태백시', '정선군', '속초시', '고성군', '양양군', '인제군', '홍천군', '횡성군', '영월군', '평창군', '화천군', '양구군', '철원군'], '충청북도': ['청주시상당구', '청주시서원구', '청주시흥덕구', '청주시청원구', '충주시', '제천시', '단양군', '영동군', '보은군', '옥천군', '음성군', '진천군', '괴산군', '증평군'], '충청남도': ['천안시서북구', '천안시동남구', '공주시', '보령시', '아산시', '서산시', '태안군', '금산군', '논산시', '계룡시', '당진시', '부여군', '서천군', '홍성군', '청양군', '예산군'], '전라북도': ['전주시완산구', '전주시덕진구', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'], '전라남도': ['목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '장성군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '완도군', '해남군', '진도군', '영암군', '무안군', '영광군', '함평군', '신안군'], '경상북도': ['포항시북구', '포항시남구', '울릉군', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '예천군', '경산시', '청도군', '고령군', '성주군', '칠곡군', '군위군', '의성군', '청송군', '영양군', '영덕군', '봉화군', '울진군'], '경상남도': ['창원시의창구', '창원시성산구', '창원시마산합포구', '창원시마산회원구', '창원시진해구', '진주시', '통영시', '고성군', '사천시', '김해시', '밀양시', '거제시', '의령군', '함안군', '창녕군', '양산시', '하동군', '남해군', '함양군', '산청군', '거창군', '합천군'], '제주특별자치도': ['제주시', '서귀포시']}


  return (
    <div className='h-full'>
      <div className="container h-full w-full mx-auto">
        <div className="py-8">
            <div className="flex flex-row items-center justify-around w-full mb-1 sm:mb-0">
                <h2 className="text-lg  leading-tight font-bold">
                    개표결과
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
                    <option value="대선">대선</option>
                    <option value="총선">총선</option>
                    <option value="지선">지선</option>


                  </select>
                  {
                    <>
                    {
                      select1Value==="대선"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                        <option value="">-- 선택 --</option>
                        <option value="제20대 대통령선거">제20대 대통령선거</option>
                        <option value="제19대 대통령선거">제19대 대통령선거</option>
                        <option value="제18대 대통령선거">제18대 대통령선거</option>
                        </select>
                      )
                    }
                    {
                      select1Value==="총선"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="제21대 국회의원선거">제21대 국회의원선거</option>
                        <option value="제20대 국회의원선거">제20대 국회의원선거</option>
                        <option value="제19대 국회의원선거">제19대 국회의원선거</option>
                        </select>
                      )
                    }
                                        {
                      select1Value==="지선"&&(
                        <select value={select2Value} onChange={handleSelect2Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        <option value="제8회 전국동시지방선거">제8회 전국동시지방선거</option>
                        <option value="제7회 전국동시지방선거">제7회 전국동시지방선거</option>
                        <option value="제6회 전국동시지방선거">제6회 전국동시지방선거</option>
                        </select>
                      )
                    }
                    </>

                  
                  }
                  {
                    <>

                        <select value={select3Value} onChange={handleSelect3Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>
                        {region1.map((elem,index)=>{
                          return (
                            <option key={index} value={elem}>{elem}</option>
                          )
                        })}
                        </select>
                    </>
                  
                  }
                  { select1Value!="지선"&&(                    <>
                        <select value={select4Value} onChange={handleSelect4Change} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">-- 선택 --</option>

                        {region2[select3Value?(select3Value):("서울특별시")].map((elem,index)=>{
                          return (
                            <option key={index} value={elem}>{elem}</option>
                          )
                        })}
                        </select>
                    </>)

                  
                  }
                  
                                    
          
                </div>
                </div>
                <div className="py-4">
                    
                    <div className="inline-block w-full overflow-hidden rounded-lg shadow">
                        <table className="w-full h-full leading-normal">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                          <tr>
                            <th scope="col" className="font-bold text-lg text-center px-6 py-3 w-1/4">
                                정당
                            </th>
                            <th scope="col" className="font-bold text-lg text-center px-6 py-3 w-1/4">
                                후보자
                            </th>
                            <th scope="col" className="font-bold text-lg text-center px-6 py-3 w-1/4">
                                득표수
                            </th>
                            <th scope="col" className="font-bold text-lg text-center px-6 py-3 w-1/4">
                                득표율(%)
                            </th>
                          </tr>
                        </thead>
                            <tbody>
                            {electionResult['result'].map((elem,index)=>{
                                return(
                                <tr key={index}>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center justify-center">
                                      <div className="flex-shrink-0">
                                      </div>
                                      <div className="">
                                        <p className="text-lg font-bold mx-auto text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                          {elem[0]}
                                        </p>
                                        
                                        
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center justify-center">
                                      <div className="flex-shrink-0">
                                      </div>
                                      <div className="">
                                        

                                        <p className="text-lg font-bold text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                          {elem[1]}
                                        </p>
                                        
                                        
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center justify-center">
                                      <div className="flex-shrink-0">
                                      </div>
                                      <div className="">
                                        

                                        <p className=" text-lg font-bold text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                          {elem[2]}
                                        </p>
                                        
                                        
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div className="flex items-center justify-center">
                                      <div className="flex-shrink-0">
                                      </div>
                                      <div className="">
                                        

                                        <p className=" text-lg font-bold text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                          {(elem[2]/electionResult['effectiveCount']*100).toFixed(1)}
                                        </p>
                                        
                                        
                                      </div>
                                    </div>
                                  </td>
                                  
                                </tr>
                                )
                              })}
                            

                                
                            </tbody>
                        </table>
                        

                    </div>
                    <div className='font-bold text-right text-gray-600'>※ 선거인수:{electionResult&&(<span>{electionResult['totalCount']}</span>)}, 유효투표수:{electionResult&&(<span>{electionResult['effectiveCount']}</span>)}</div>
                </div>
            </div>
            {
        showModal&&(<ArticleModal modalText={modalText} closeModal={closeModal}></ArticleModal>)
      }
        </div>


        </div>
      )
}
