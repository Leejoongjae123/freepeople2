"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ArticleModal from "./ArticleModal";

export default function SearchCard1() {
  const [select1Value, setSelect1Value] = useState("대선");
  const [select2Value, setSelect2Value] = useState("제20대 대통령선거");
  const [select3Value, setSelect3Value] = useState("서울특별시");
  const [select4Value, setSelect4Value] = useState("종로구");
  const [select4List, setSelect4List] = useState([]);

  const [isSelect, setIsSelect] = useState(false);
  const [count, setCount] = useState(1);

  const [electionResult, setElectionResult] = useState({ result: [] });
  const [electionResultLoading, setElectionResultLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const [modalText, setModalText] = useState(["", "", ""]);

  const handleSelect1Change = (e) => {
    const selectedValue = e.target.value;
    setSelect1Value(selectedValue);
    setSelect2Value("");
    setSelect3Value("");
    setSelect4Value("");
    setIsSelect(false);
  };

  const handleSelect2Change = (e) => {
    const selectedValue = e.target.value;
    setSelect2Value(selectedValue);
    setIsSelect(false);
  };

  const handleSelect3Change = (e) => {
    const selectedValue = e.target.value;
    setSelect3Value(selectedValue);
    setSelect4Value('-- 선택 --');
    setIsSelect(false);
    if (select1Value === "지선") {
      setCount(count + 1);
    }
  };

  const handleSelect4Change = (e) => {
    const selectedValue = e.target.value;
    setSelect4Value(selectedValue);
    setIsSelect(true);
    setCount(count + 1);
  };

  console.log(select1Value, select2Value, select3Value, select4Value);

  const fetchData = async () => {
    try {
      let url = `https://mks5ux6whggik4anhr3c5ofdie0abvss.lambda-url.ap-northeast-2.on.aws/ElectionResult?sgName=${select2Value}&sdName=${select3Value}&wiwName=${select4Value}`;

      const response = await axios.get(url);

      setElectionResult(response.data);
      setElectionResultLoading(false);
      console.log("loading완료개표결과");
      console.log("electionResult:", electionResult);
    } catch (error) {
      setElectionResult({ result: [] });
      setElectionResultLoading(false);
      console.log("loading실패개표결과");
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

  const handleButtonClick = (title, contents, imageUrl) => {
    setModalText([title, contents, imageUrl]);
    toggleModal();
  };

  const region1 = [
    "합계",
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];
  const region2 = {
    합계: [
      "합계"],
    서울특별시: [
      "합계",
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
    부산광역시: [
      "합계",
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "기장군",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
    ],
    대구광역시: [
      "합계",
      "중구",
      "동구",
      "서구",
      "남구",
      "북구",
      "수성구",
      "달서구",
      "달성군",
    ],
    인천광역시: [
      "합계",
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
      "강화군",
      "옹진군",
    ],
    광주광역시: ["합계","동구", "서구", "남구", "북구", "광산구"],
    대전광역시: ["합계","동구", "중구", "서구", "유성구", "대덕구"],
    울산광역시: ["합계","중구", "남구", "동구", "북구", "울주군"],
    세종특별자치시: ["세종특별자치시"],
    경기도: [
      "합계",
      "수원시장안구",
      "수원시권선구",
      "수원시팔달구",
      "수원시영통구",
      "성남시수정구",
      "성남시중원구",
      "성남시분당구",
      "의정부시",
      "안양시만안구",
      "안양시동안구",
      "부천시",
      "광명시",
      "평택시",
      "양주시",
      "동두천시",
      "안산시상록구",
      "안산시단원구",
      "고양시덕양구",
      "고양시일산동구",
      "고양시일산서구",
      "과천시",
      "의왕시",
      "구리시",
      "남양주시",
      "오산시",
      "화성시",
      "시흥시",
      "군포시",
      "하남시",
      "파주시",
      "여주시",
      "이천시",
      "용인시처인구",
      "용인시수지구",
      "용인시기흥구",
      "안성시",
      "김포시",
      "광주시",
      "포천시",
      "연천군",
      "양평군",
      "가평군",
    ],
    강원도: [
      "합계",
      "춘천시",
      "원주시",
      "강릉시",
      "동해시",
      "삼척시",
      "태백시",
      "정선군",
      "속초시",
      "고성군",
      "양양군",
      "인제군",
      "홍천군",
      "횡성군",
      "영월군",
      "평창군",
      "화천군",
      "양구군",
      "철원군",
    ],
    충청북도: [
      "합계",
      "청주시상당구",
      "청주시서원구",
      "청주시흥덕구",
      "청주시청원구",
      "충주시",
      "제천시",
      "단양군",
      "영동군",
      "보은군",
      "옥천군",
      "음성군",
      "진천군",
      "괴산군",
      "증평군",
    ],
    충청남도: [
      "합계",
      "천안시서북구",
      "천안시동남구",
      "공주시",
      "보령시",
      "아산시",
      "서산시",
      "태안군",
      "금산군",
      "논산시",
      "계룡시",
      "당진시",
      "부여군",
      "서천군",
      "홍성군",
      "청양군",
      "예산군",
    ],
    전라북도: [
      "합계",
      "전주시완산구",
      "전주시덕진구",
      "군산시",
      "익산시",
      "정읍시",
      "남원시",
      "김제시",
      "완주군",
      "진안군",
      "무주군",
      "장수군",
      "임실군",
      "순창군",
      "고창군",
      "부안군",
    ],
    전라남도: [
      "합계",
      "목포시",
      "여수시",
      "순천시",
      "나주시",
      "광양시",
      "담양군",
      "장성군",
      "곡성군",
      "구례군",
      "고흥군",
      "보성군",
      "화순군",
      "장흥군",
      "강진군",
      "완도군",
      "해남군",
      "진도군",
      "영암군",
      "무안군",
      "영광군",
      "함평군",
      "신안군",
    ],
    경상북도: [
      "합계",
      "포항시북구",
      "포항시남구",
      "울릉군",
      "경주시",
      "김천시",
      "안동시",
      "구미시",
      "영주시",
      "영천시",
      "상주시",
      "문경시",
      "예천군",
      "경산시",
      "청도군",
      "고령군",
      "성주군",
      "칠곡군",
      "군위군",
      "의성군",
      "청송군",
      "영양군",
      "영덕군",
      "봉화군",
      "울진군",
    ],
    경상남도: [
      "합계",
      "창원시의창구",
      "창원시성산구",
      "창원시마산합포구",
      "창원시마산회원구",
      "창원시진해구",
      "진주시",
      "통영시",
      "고성군",
      "사천시",
      "김해시",
      "밀양시",
      "거제시",
      "의령군",
      "함안군",
      "창녕군",
      "양산시",
      "하동군",
      "남해군",
      "함양군",
      "산청군",
      "거창군",
      "합천군",
    ],
    제주특별자치도: ["합계","제주시", "서귀포시"],
  };

  const region3 = {
    "서울특별시": [
      "종로구",
      "중구성동구갑",
      "중구성동구을",
      "용산구",
      "광진구갑",
      "광진구을",
      "동대문구갑",
      "동대문구을",
      "중랑구갑",
      "중랑구을",
      "성북구갑",
      "성북구을",
      "강북구갑",
      "강북구을",
      "도봉구갑",
      "도봉구을",
      "노원구갑",
      "노원구을",
      "노원구병",
      "은평구갑",
      "은평구을",
      "서대문구갑",
      "서대문구을",
      "마포구갑",
      "마포구을",
      "양천구갑",
      "양천구을",
      "강서구갑",
      "강서구을",
      "강서구병",
      "구로구갑",
      "구로구을",
      "금천구",
      "영등포구갑",
      "영등포구을",
      "동작구갑",
      "동작구을",
      "관악구갑",
      "관악구을",
      "서초구갑",
      "서초구을",
      "강남구갑",
      "강남구을",
      "강남구병",
      "송파구갑",
      "송파구을",
      "송파구병",
      "강동구갑",
      "강동구을"
    ],
    "부산광역시": [
      "중구영도구",
      "서구동구",
      "부산진구갑",
      "부산진구을",
      "동래구",
      "남구갑",
      "남구을",
      "북구강서구갑",
      "북구강서구을",
      "해운대구갑",
      "해운대구을",
      "사하구갑",
      "사하구을",
      "금정구",
      "연제구",
      "수영구",
      "사상구",
      "기장군"
    ],
    "대구광역시": [
      "중구남구",
      "동구갑",
      "동구을",
      "서구",
      "북구갑",
      "북구을",
      "수성구갑",
      "수성구을",
      "달서구갑",
      "달서구을",
      "달서구병",
      "달성군"
    ],
    "인천광역시": [
      "중구강화군옹진군",
      "동구미추홀구갑",
      "동구미추홀구을",
      "연수구갑",
      "연수구을",
      "남동구갑",
      "남동구을",
      "부평구갑",
      "부평구을",
      "계양구갑",
      "계양구을",
      "서구갑",
      "서구을"
    ],
    "광주광역시": [
      "동구남구갑",
      "동구남구을",
      "서구갑",
      "서구을",
      "북구갑",
      "북구을",
      "광산구갑",
      "광산구을"
    ],
    "대전광역시": [
      "동구",
      "중구",
      "서구갑",
      "서구을",
      "유성구갑",
      "유성구을",
      "대덕구"
    ],
    "울산광역시": [
      "중구",
      "남구갑",
      "남구을",
      "동구",
      "북구",
      "울주군"
    ],
    "세종특별자치시": [
      "세종특별자치시갑",
      "세종특별자치시을"
    ],
    "경기도": [
      "수원시갑",
      "수원시을",
      "수원시병",
      "수원시정",
      "수원시무",
      "성남시수정구",
      "성남시중원구",
      "성남시분당구갑",
      "성남시분당구을",
      "의정부시갑",
      "의정부시을",
      "안양시만안구",
      "안양시동안구갑",
      "안양시동안구을",
      "부천시갑",
      "부천시을",
      "부천시병",
      "부천시정",
      "광명시갑",
      "광명시을",
      "평택시갑",
      "평택시을",
      "동두천시연천군",
      "안산시상록구갑",
      "안산시상록구을",
      "안산시단원구갑",
      "안산시단원구을",
      "고양시갑",
      "고양시을",
      "고양시병",
      "고양시정",
      "의왕시과천시",
      "구리시",
      "남양주시갑",
      "남양주시을",
      "남양주시병",
      "오산시",
      "시흥시갑",
      "시흥시을",
      "군포시",
      "하남시",
      "용인시갑",
      "용인시을",
      "용인시병",
      "용인시정",
      "파주시갑",
      "파주시을",
      "이천시",
      "안성시",
      "김포시갑",
      "김포시을",
      "화성시갑",
      "화성시을",
      "화성시병",
      "광주시갑",
      "광주시을",
      "양주시",
      "포천시가평군",
      "여주시양평군"
    ],
    "강원도": [
      "춘천시철원군화천군양구군갑",
      "춘천시철원군화천군양구군을",
      "원주시갑",
      "원주시을",
      "강릉시",
      "동해시태백시삼척시정선군",
      "속초시인제군고성군양양군",
      "홍천군횡성군영월군평창군"
    ],
    "충청북도": [
      "청주시상당구",
      "청주시서원구",
      "청주시흥덕구",
      "청주시청원구",
      "충주시",
      "제천시단양군",
      "보은군옥천군영동군괴산군",
      "증평군진천군음성군"
    ],
    "충청남도": [
      "천안시갑",
      "천안시을",
      "천안시병",
      "공주시부여군청양군",
      "보령시서천군",
      "아산시갑",
      "아산시을",
      "서산시태안군",
      "논산시계룡시금산군",
      "당진시",
      "홍성군예산군"
    ],
    "전라북도": [
      "전주시갑",
      "전주시을",
      "전주시병",
      "군산시",
      "익산시갑",
      "익산시을",
      "정읍시고창군",
      "남원시임실군순창군",
      "김제시부안군",
      "완주군진안군무주군장수군"
    ],
    "전라남도": [
      "목포시",
      "여수시갑",
      "여수시을",
      "순천시광양시곡성군구례군갑",
      "순천시광양시곡성군구례군을",
      "나주시화순군",
      "담양군함평군영광군장성군",
      "고흥군보성군장흥군강진군",
      "해남군완도군진도군",
      "영암군무안군신안군"
    ],
    "경상북도": [
      "포항시북구",
      "포항시남구울릉군",
      "경주시",
      "김천시",
      "안동시예천군",
      "구미시갑",
      "구미시을",
      "영주시영양군봉화군울진군",
      "영천시청도군",
      "상주시문경시",
      "경산시",
      "군위군의성군청송군영덕군",
      "고령군성주군칠곡군"
    ],
    "경상남도": [
      "창원시의창구",
      "창원시성산구",
      "창원시마산합포구",
      "창원시마산회원구",
      "창원시진해구",
      "진주시갑",
      "진주시을",
      "통영시고성군",
      "사천시남해군하동군",
      "김해시갑",
      "김해시을",
      "밀양시의령군함안군창녕군",
      "거제시",
      "양산시갑",
      "양산시을",
      "산청군함양군거창군합천군"
    ],
    "제주특별자치도": [
      "제주시갑",
      "제주시을",
      "서귀포시"
    ]
  }

  return (
    <div className="h-full">
      <div className="container h-full w-full mx-auto">
        <div className="py-8">
          <div className="flex flex-row items-center justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-lg  leading-tight font-bold">개표결과</h2>
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
              <select
                value={select1Value}
                onChange={handleSelect1Change}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">-- 선택 --</option>
                <option value="대선">대선</option>
                <option value="총선">총선</option>
                <option value="지선">지선</option>
              </select>
              {
                <>
                  {select1Value === "대선" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">-- 선택 --</option>
                      <option value="제20대 대통령선거">
                        제20대 대통령선거
                      </option>
                      <option value="제19대 대통령선거">
                        제19대 대통령선거
                      </option>
                      <option value="제18대 대통령선거">
                        제18대 대통령선거
                      </option>
                    </select>
                  )}
                  {select1Value === "총선" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">-- 선택 --</option>
                      <option value="제21대 국회의원선거">
                        제21대 국회의원선거
                      </option>
                      <option value="제20대 국회의원선거">
                        제20대 국회의원선거
                      </option>
                      <option value="제19대 국회의원선거">
                        제19대 국회의원선거
                      </option>
                    </select>
                  )}
                  {select1Value === "지선" && (
                    <select
                      value={select2Value}
                      onChange={handleSelect2Change}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">-- 선택 --</option>
                      <option value="제8회 전국동시지방선거">
                        제8회 전국동시지방선거
                      </option>
                      <option value="제7회 전국동시지방선거">
                        제7회 전국동시지방선거
                      </option>
                      <option value="제6회 전국동시지방선거">
                        제6회 전국동시지방선거
                      </option>
                    </select>
                  )}
                </>
              }
              {
                <>
                  <select
                    value={select3Value}
                    onChange={handleSelect3Change}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">-- 선택 --</option>
                    {region1.map((elem, index) => {
                      return (
                        <option key={index} value={elem}>
                          {elem}
                        </option>
                      );
                    })}
                  </select>
                </>
              }
              {select1Value != "지선" && (
                <>
                  <select
                    value={select4Value}
                    onChange={handleSelect4Change}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">-- 선택 --</option>
                    {
                      select1Value.includes('총선')?(
                        region3[select3Value ? select3Value : "서울특별시"].map(
                          (elem, index) => {
                            return (
                              <option key={index} value={elem}>
                                {elem}
                              </option>
                            );
                          }
                        )
                      ):(
                        region2[select3Value ? select3Value : "서울특별시"].map(
                          (elem, index) => {
                            return (
                              <option key={index} value={elem}>
                                {elem}
                              </option>
                            );
                          }
                        )
                      )
                    }
                    {}
                  </select>
                </>
              )}
            </div>
          </div>
          <div className="py-4">
            <div className="inline-block w-full overflow-hidden rounded-lg shadow">
              <table className="w-full h-full leading-normal">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="font-bold text-lg text-center px-6 py-3 w-1/4"
                    >
                      정당
                    </th>
                    <th
                      scope="col"
                      className="font-bold text-lg text-center px-6 py-3 w-1/4"
                    >
                      후보자
                    </th>
                    <th
                      scope="col"
                      className="font-bold text-lg text-center px-6 py-3 w-1/4"
                    >
                      득표수
                    </th>
                    <th
                      scope="col"
                      className="font-bold text-lg text-center px-6 py-3 w-1/4"
                    >
                      득표율(%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {electionResult["result"].map((elem, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center justify-center">
                            <div className="flex-shrink-0"></div>
                            <div className="">
                              <p className="text-lg font-bold mx-auto text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                {elem[0]}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center justify-center">
                            <div className="flex-shrink-0"></div>
                            <div className="">
                              <p className="text-lg font-bold text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                {elem[1]}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center justify-center">
                            <div className="flex-shrink-0"></div>
                            <div className="">
                              <p className=" text-lg font-bold text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                {elem[2]}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center justify-center">
                            <div className="flex-shrink-0"></div>
                            <div className="">
                              <p className=" text-lg font-bold text-center whitespace-pre-wrap text-gray-900 whitespace-no-wrap">
                                {(
                                  (elem[2] / electionResult["effectiveCount"]) *
                                  100
                                ).toFixed(1)}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="font-bold text-right text-gray-600">
              ※ 선거인수:
              {electionResult && <span>{electionResult["totalCount"]}</span>},
              유효투표수:
              {electionResult && (
                <span>{electionResult["effectiveCount"]}</span>
              )}
            </div>
          </div>
        </div>
        {showModal && (
          <ArticleModal
            modalText={modalText}
            closeModal={closeModal}
          ></ArticleModal>
        )}
      </div>
    </div>
  );
}
