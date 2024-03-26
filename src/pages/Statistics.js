import React from "react";
import Graph from "../component/Graph";
import GraphResult from "../component/GraphResult";

const Statistics = () => {
  const graphData = [12, 5, 3];
  const total = graphData.reduce((acc, curr) => acc + curr, 0); // 그래프 데이터의 합계 계산

  return (
    <div className="w-full">
      <div className="w-full h-[22rem] flex justify-center items-end my-10">
        <Graph data={graphData}/>
      </div>
      <div>
        <GraphResult total={total} done={graphData[0]} inProgress={graphData[1]} todo={graphData[2]}/>
      </div>
    </div>
  );
};

export default Statistics;
