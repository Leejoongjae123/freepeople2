'use client'
import React from 'react'
import AppModal from './ReactModal';
import { useState } from 'react';

export default function FooterModal() {
  
const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      
      <button onClick={openModal}>미래 민중은</button>
      <AppModal isOpen={modalIsOpen} closeModal={closeModal}>
      <div className="">
        <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white  dark:bg-gray-700">

                <div className="flex items-start justify-between p-4  dark:border-gray-600">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      미래민중은
                    </h1>
                </div>


                <div className="flex p-6 space-y-6 ">
                  <p className="whitespace-pre-wrap text-base leading-relaxed text-gray-500 dark:text-gray-400">
<span className='text-lg font-bold'>■ 민중의 대한민국 정치 신뢰를 회복시킵니다.</span> <br/>
 : 민중의 긴박한 국내외 정치경제 상황과 엄중한 민생경제를 실질적 대안제시 중심의 정치로 극복해야 합니다.<br/>
 <span className='text-lg font-bold'>■ 민중의 수단화를 막습니다.</span><br/>
 : 민중의 선거철 등 정치이벤트에 따라 일관성 없고 부화뇌동하는 행위로 발생하는 피해를 방지해야 합니다.<br/>
 <span className='text-lg font-bold'>■ 민중의 능동성을 지향합니다. </span><br/>
 : 민중에게 균형적 플랫폼의 편향되지 않고 객관적인 정보를 제공하고 능동적 소통·공유가 필요합니다.<br/>
 <span className='text-lg font-bold'>■ 민중의 미래를 준비합니다.</span><br/>
 : 민중의 적극적인 참여와 견제로 공동체성 회복의 미래를 물려줘야 합니다. <br/>
 <span className='text-lg font-bold'>■ 나아가 시민단체 등 다양한 단체와의 소통을 통해 민중 개개인의 역량 강화를 이루고 궁극적으로 대한민국의 부국강병(국태안민)을 완성하는데 최선의 역할을 하겠습니다. </span><br/>

                  </p>
                    
                </div>

            </div>
        </div>
      </div>   
      </AppModal>
    </div>
  )
}
