import React, { useState } from "react";
import "../../styles/Modal.css";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Dropdown from "./Dropdown.js";

const DetailModal = ({ modalState, onClose }) => {
  const [date, setDate] = useState("2024-03-19");
  const [state, setState] = useState("상태설정");
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const [isDropdownOpen, setIsDropdonwOpen] = useState(false);
  const closeDropdown = () => {
    setIsDropdonwOpen(false);
  };

  const changeState = (value) => {
    setState(value);
  };

  return (
    <div>
      {modalState && (
        <div id="modalContainer">
          <div id="modalContent">
            <div id="closeBox">
              <IoClose
                size="50"
                onClick={() => {
                  onClose(); // 부모 컴포넌트의 상태 업데이트 함수 호출
                }}
              />
            </div>
            <div className="contentBox">
              <input className="itemBox" />
              <div className="itemBox">
                <p className={"text-[#848484] mb-3"}>날짜</p>
                <input type="date" value={date} onChange={handleDate} />
              </div>
              <div className="itemBox text-[#848484] flex flex-row justify-between">
                <p>{state}</p>
                {isDropdownOpen ? (
                  <FaAngleUp
                    size={30}
                    onClick={() => {
                      setIsDropdonwOpen(!isDropdownOpen);
                    }}
                  />
                ) : (
                  <FaAngleDown
                    size={30}
                    onClick={() => {
                      setIsDropdonwOpen(!isDropdownOpen);
                    }}
                  />
                )}
              </div>
              {isDropdownOpen && (
                <Dropdown
                  dropdownState={isDropdownOpen}
                  changeState={changeState}
                  onClose={closeDropdown}
                />
              )}
              <div className={"flex justify-between"}>
                <button className="btn">삭제</button>
                <button className="btn">완료</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailModal;
