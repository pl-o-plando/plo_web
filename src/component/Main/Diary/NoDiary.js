import React from "react";

const NoDiary = ({ onDiaryButtonClick }) => {
  return (
    <div className="flex items-center justify-between px-8">
      <div className="text-xl text-[#888888] mb-10">작성된 일기가 없습니다.</div>
      <div className="mb-10 bg-[#976EC2] text-xl text-white w-[10rem] h-[3rem] justify-center flex items-center rounded font-bold" onClick={onDiaryButtonClick}>일기작성</div>
    </div>
  );
};

export default NoDiary;
