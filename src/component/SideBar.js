import "../styles/SideBar.css";
import calendar from "../assets/SideBar/calendar.png";
import pieChart from "../assets/SideBar/pie-chart-2.png";
import settings from "../assets/SideBar/settings.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  //0->캘린더(메인), 1->통계, 2->설정
  const [isSelected, setIsSelected] = useState(0);
  const navigate = useNavigate();
  const onClick = (num) => {
    setIsSelected(num);
    console.log(num);
    if(num==0){
      navigate("/");
    }
    else if(num==1){
      navigate("/statistics");
    }
    else if(num==2){
      navigate("/setting");
    }
  };
  const menuItems = [
    { src: calendar, onClick: () => onClick(0), isSelected: isSelected === 0 },
    { src: pieChart, onClick: () => onClick(1), isSelected: isSelected === 1 },
    { src: settings, onClick: () => onClick(2), isSelected: isSelected === 2 },
  ];

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <img
        key={index}
        src={item.src}
        onClick={item.onClick}
        className={`cursor-pointer ${
          item.isSelected && "border-white border-4"
        }`}
      />
    ));
  };

  return (
    <div id="side-bar">
      <div id="logo">pl&o</div>
      <div id="items">
        {renderMenuItems()}
        <div id="loginBtn">로그인</div>
      </div>
    </div>
  );
};
export default SideBar;
