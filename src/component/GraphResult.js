import React from "react";

const GraphResult = ({ total, done, inProgress, todo }) => {
  return (
    <div className="w-full h-[14rem] bg-[#E5D1FA] flex justify-center items-center border-y-2 border-[#976EC2] ">
      <div className="w-[90%] bg-white flex justify-evenly items-center h-[80%] rounded-2xl border-2 border-[#976EC2]">
        <div className="text-[#976EC2] text-3xl font-bold flex justify-center items-center flex-col"><p>Total</p> <p>{total}</p></div>
        <div className="text-[#FF6A6A] text-3xl font-bold flex justify-center items-center flex-col"><p>Done</p> <p>{done}</p></div>
        <div className="text-[#008FDF] text-3xl font-bold flex justify-center items-center flex-col"><p>In Progress</p> <p>{inProgress}</p></div>
        <div className="text-[#FFB931] text-3xl font-bold flex justify-center items-center flex-col"><p>Todo</p> <p>{todo}</p></div>
      </div>
    </div>
  );
}

export default GraphResult;
