import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  yearState,
  monthState,
  dateState,
  dayState,
} from "../../recoil/dateState";
import { useRecoilState } from "recoil";

const Calendar = () => {
  const [year, setYear] = useRecoilState(yearState);
  const [month, setMonth] = useRecoilState(monthState);
  const [date, setDate] = useRecoilState(dateState);
  const [day, setDay] = useRecoilState(dayState);
  const [flag, setFlag] = useState(false);

  //현재 주의 시작일(일)
  const [startDate, setStartDate] = useState(new Date(year, month, date - day));
  //현재 주의 마지막일(토)
  const [endDate, setEndDate] = useState(new Date(year, month, date - day + 6));
  const [dayList, setDayList] = useState([]);

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  //요일 렌더링
  const renderWeek = () => {
    return week.map((item, index) => (
      <div
        key={index}
        className={"text-2xl text-gray-600 text-center w-10 h-10"}
      >
        {item}
      </div>
    ));
  };

  useEffect(() => {
    renderDay();
  }, [startDate]);

  //날짜 렌더링
  const renderDay = () => {
    setFlag(false);
    const newDayList = [];
    let currentDate = new Date(startDate);
    //1일이 월화수목에 위치한다면 해당 달로 표시
    while (currentDate <= endDate) {
      if (
        currentDate.getDate() == 1 &&
        currentDate.getDay() > 0 &&
        currentDate.getDay() < 5
      ) {
        setFlag(!flag);
      }

      newDayList.push(currentDate.getDate());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setDayList(newDayList);
  };

  //이전 주로 이동
  const moveToPreviousWeek = () => {
    const newStartDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() - 7
    );
    const newEndDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() - 7
    );
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };
  //다음 주로 이동
  const moveToNextWeek = () => {
    const newStartDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + 7
    );
    const newEndDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate() + 7
    );
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  const handleClickDate = (e) => {
    const clickedDay = parseInt(e.target.textContent); //클릭한 날짜
    const clickIndex = dayList.findIndex((day) => day === clickedDay); //클릭한 요일의 인덱스
    //클릭한 전체의 날
    const clickDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + clickIndex
    );
    console.log(clickDate);
    // Recoil 상태 업데이트 함수에 전달할 값
    const newYear = clickDate.getFullYear();
    const newMonth = clickDate.getMonth();
    const newDate = clickDate.getDate();
    const newDay = clickDate.getDay();

    // Recoil 상태 업데이트
    setYear(newYear);
    setMonth(newMonth);
    setDate(newDate);
    setDay(newDay);
  };

  return (
    <div className={"flex flex-col justify-center items-center p-4"}>
      <p className={"text-[#976EC2] text-4xl font-bold mt-10 mb-14"}>
        {startDate.getFullYear()}년{" "}
        {flag
          ? `${startDate.getMonth() + 2}월`
          : `${startDate.getMonth() + 1}월`}
      </p>
      <div className={"flex flex-row justify-between w-full mb-3"}>
        <IoIosArrowBack onClick={moveToPreviousWeek} size={40} color="976EC2" />
        {renderWeek()}
        <IoIosArrowForward onClick={moveToNextWeek} size={40} color="976EC2" />
      </div>
      <div className={"flex flex-row justify-between w-full mb-3"}>
        <div className={"w-10"} />
        {dayList.map((item, index) => (
          <div
            key={index}
            className={
              "text-2xl text-[#976EC2] font-bold w-10 h-10 rounded-full flex justify-center items-center"
            }
            onClick={handleClickDate}
            style={{ backgroundColor: date === item ? "#E5D1FA" : "white" }}
          >
            {item}
          </div>
        ))}
        <div className={"w-10"} />
      </div>
      <hr className={"border-[#976EC2] w-full"}></hr>
    </div>
  );
};

export default Calendar;
