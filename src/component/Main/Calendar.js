import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Calendar = () => {
  const now = new Date();
  const [startDate, setStartDate] = useState(
    new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay())
  );
  const [endDate, setEndDate] = useState(
    new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - now.getDay() + 6
    )
  );
  const [dayList, setDayList] = useState([]);
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    renderDay();
  }, [startDate]);

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

  const renderDay = () => {
    const newDayList = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      newDayList.push(currentDate.getDate());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setDayList(newDayList);
  };

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

  return (
    <div className={"flex flex-col justify-center items-center p-4"}>
      <p className={"text-[#976EC2] text-4xl font-bold mt-10 mb-14"}>
        {startDate.getFullYear()}년 {startDate.getMonth() + 1}월
      </p>
      <div className={"flex flex-row justify-between w-full mb-3"}>
        <IoIosArrowBack onClick={moveToPreviousWeek} size="40" color="976EC2" />
        {renderWeek()}
        <IoIosArrowForward onClick={moveToNextWeek} size="40" color="976EC2" />
      </div>
      <div className={"flex flex-row justify-between w-full mb-3"}>
        <div className={"w-10"} />
        {dayList.map((day, index) => (
          <div
            key={index}
            className={
              "text-2xl text-[#976EC2] font-bold w-10 h-10 text-center"
            }
          >
            {day}
          </div>
        ))}
        <div className={"w-10"} />
      </div>
      <hr className={"border-[#976EC2] w-full"}></hr>
    </div>
  );
};

export default Calendar;
