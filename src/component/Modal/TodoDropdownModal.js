import React, { useState } from "react";
import "../../styles/Modal.css";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";

const TodoDropdownModal = ({ dropdownState, changeState, onClose }) => {
  const handleChange = (value) => {
    changeState(value);
    console.log(value);
  };

  return (
    <div>
      {dropdownState && (
        <div id="modalContainer">
          <div
            className={
              "absolute bg-[#e5d1fa] w-60 h-fit py-5 px-7 rounded-3xl "
            }
          >
            <div id="closeBox">
              <IoClose
                size="50"
                onClick={() => {
                  onClose();
                }}
              />
            </div>
            <div className="contentBox">
              <div
                className="itemBox dropdownItem"
                onClick={() => {
                  handleChange(2);
                  onClose();
                }}
              >
                <FaCheck size={30} />
                <p>완료</p>
              </div>
              <div
                className="itemBox  dropdownItem"
                onClick={() => {
                  handleChange(1);
                  onClose();
                }}
              >
                <FaExclamation size={30} />
                <p>진행중</p>
              </div>
              <div
                className="itemBox  dropdownItem"
                onClick={() => {
                  handleChange(0);
                  onClose();
                }}
              >
                <IoClose size={35} />
                <p>미완료</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoDropdownModal;
