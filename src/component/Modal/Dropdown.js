import React from "react";
import "../../styles/Modal.css";
import { FaCheck } from "react-icons/fa6";
import { FaExclamation } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Dropdown = ({ dropdownState, changeState, onClose }) => {
  const handleChange = (value) => {
    changeState(value);
  };
  return (
    <div>
      {dropdownState && (
        <div
          className={
            "absolute bg-[#e5d1fa] p-3 rounded-2xl right-7 border-2 border-[#976ec2] "
          }
        >
          <div className="flex flex-col gap-2">
            <div
              className="itemBox flex gap-4 items-center"
              onClick={() => {
                handleChange("완료");
                onClose();
              }}
            >
              <FaCheck size={30} />
              <p>완료</p>
            </div>
            <div
              className="itemBox flex gap-4 items-center"
              onClick={() => {
                handleChange("진행중");
                onClose();
              }}
            >
              <FaExclamation size={30} />
              <p>진행중</p>
            </div>
            <div
              className="itemBox flex gap-4 items-center"
              onClick={() => {
                handleChange("미완료");
                onClose();
              }}
            >
              <IoClose size={35} />
              <p>미완료</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
