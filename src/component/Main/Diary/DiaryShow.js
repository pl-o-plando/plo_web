import React from "react";

const DiaryShow = () => {
  return(
    <div className="flex flex-col mx-5">
      <div className="text-[#976EC2] text-5xl font-bold justify-start mb-14">Diary</div>
      <div className="border-[#C78ED6] border-2 rounded-xl h-[4rem] flex mb-10">
        <div className="bg-[#E5D1FA] text-[#976EC2] w-[12%] flex justify-center items-center text-3xl font-bold">기분</div>
        <input className="flex-1"></input>
      </div>
      <input placeholder="일기를 작성해주세요." className="border-[#C78ED6] border-2 h-[40rem] rounded-lg mb-10"></input>
      <div className="flex justify-end">
        <div className="bg-[#976EC2] w-[8rem] h-[4rem] rounded-xl text-white font-bold text-2xl flex justify-center items-center">저장</div>
      </div>
    </div>
  )
}

export default DiaryShow;