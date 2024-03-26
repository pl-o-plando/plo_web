import React from "react";
import Graph from "../component/Graph";

const Statistics = () => {
  const graphData = [12, 5, 3];

  return (
    <div className="w-full h-[28rem] flex justify-center items-end">
      <Graph data={graphData}/>
    </div>
  );
};

export default Statistics;
