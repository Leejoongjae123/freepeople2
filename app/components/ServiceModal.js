'use client'
import React from 'react'
import AppModal from './ReactModal';
import { useState } from 'react';

export default function ServiceModal() {
  
const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      
      <button onClick={openModal}>서비스 범위</button>
      <AppModal isOpen={modalIsOpen} closeModal={closeModal}>
      <div className="">
        <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white  dark:bg-gray-700">

                <div className="flex items-start justify-between p-4  dark:border-gray-600">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      서비스 범위
                    </h1>
                </div>


                <div className="flex p-6 space-y-6 ">
                  <p className="whitespace-pre-wrap text-base leading-relaxed text-gray-500 dark:text-gray-400">
<span className='text-lg font-bold'>■ 정보.분석</span><br/>
  -빅데이터 분석 : 언론진흥재단 빅카인즈를 활용한 주간단위 텍스트 분석<br/>
  -논평 및 컬럼 : 일일 주요 정책 및 이슈 논평 및 주간 단위 핵심 아젠다 컬럼<br/>
  -대통령 지지도 분석 : 국내 3대 조사기관 주간 대통령지지도 <br/>
  -주요 정당 논평 : 국민의힘, 더불어민주당, 정의당 등 정당 논평<br/>
  -뉴스 서비스 : 국내 5대 일간지 및 각 광역단체별 지역 일간지 뉴스<br/>
  -통계정보 : 통계청 및 한국은행 주요 통계 게시<br/>
  -정책정보 : KDI, 국회(비정기), 정부 각부처 정책보도자료(주간 또는 일간) 등 제시<br/>
  -선거자료 : 대통령, 국회의원, 지방선거 주요 공약 및 데이터 <br/><br/>

<span className='text-lg font-bold'>■ 연구.조사.컨설팅 </span><br/>
-연구 : 정치(선거, 행정), 경제(금융, 산업, 재정), 사회(복지, 교육, 노동) 등 주제별 심층 연구 <br/>
-조사 : 여론, 정책, 인지도 등 정량조사 및 FGI, FGD 등 정성조사<br/>
-컨설팅 : 선거, PI(개인이미지) 컨셉, 홍보(메시지, 자문) 등 제반 캠페인 전략 <br/>

                  </p>
                    
                </div>

            </div>
        </div>
      </div>   
      </AppModal>
    </div>
  )
}
