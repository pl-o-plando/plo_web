import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ShowWeek = () => {
  return (
    <div className={"w-full"}>
      <div
        className={
          "flex px-10 py-6 justify-between items-center bg-[#E5D1FA] border-b-2 border-[#976EC2]"
        }
      >
        <IoIosArrowBack size={30} color="976EC2" />
        <p
          className={
            "text-2xl font-extrabold text-[#976EC2] bg-white px-10 py-1 rounded-lg"
          }
        >
          2024년 3월 첫째주
        </p>
        <IoIosArrowForward size={30} color="976EC2" />
      </div>
    </div>
  );
};

export default ShowWeek;
