import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import moment from "moment";

const ShowWeek = () => {
  // 다음 주로 이동하는 함수
  const moveToNextWeek = () => {
    const first = moment(firstDayOfWeek).add(7, "days").format("YYYY-MM-DD");
    setFirstDayOfWeek(first);
    const last = moment(lastDayOfWeek).add(7, "days").format("YYYY-MM-DD");
    setLastDayOfWeek(last);
  };

  // 저번 주로 이동하는 함수
  const moveToPreviousWeek = () => {
    const first = moment(firstDayOfWeek)
      .subtract(7, "days")
      .format("YYYY-MM-DD");
    setFirstDayOfWeek(first);
    const last = moment(lastDayOfWeek).subtract(7, "days").format("YYYY-MM-DD");
    setLastDayOfWeek(last);
  };
  const moment = require("moment");
  const now = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(now);
  const [firstDayOfWeek, setFirstDayOfWeek] = useState();
  const [lastDayOfWeek, setLastDayOfWeek] = useState();

  const getFirstDayOfMonth = () => {
    const day = moment(now).day();
    setDate(day);
    const first = moment(now).subtract(day, "days").format("YYYY-MM-DD");
    setFirstDayOfWeek(first);
    const last = moment(now)
      .add(6 - day, "days")
      .format("YYYY-MM-DD");
    setLastDayOfWeek(last);
  };

  useEffect(() => {
    getFirstDayOfMonth();
  }, []);

  return (
    <div className={"w-full"}>
      <div
        className={
          "flex px-10 py-8 justify-between items-center bg-[#E5D1FA] border-b-2 border-[#976EC2]"
        }
      >
        <IoIosArrowBack size={30} color="976EC2" onClick={moveToPreviousWeek} />
        <p
          className={
            "text-2xl font-extrabold text-[#976EC2] bg-white px-10 py-1 rounded-lg"
          }
        >
          {firstDayOfWeek} ~ {lastDayOfWeek}
        </p>
        <IoIosArrowForward size={30} color="976EC2" onClick={moveToNextWeek} />
      </div>
    </div>
  );
};

export default ShowWeek;
