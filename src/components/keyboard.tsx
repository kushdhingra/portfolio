import React from "react";
import { SiWindows11 } from "react-icons/si";
import { FaAngleDown, FaAngleLeft, FaAngleUp, FaAngleRight } from "react-icons/fa";

const Keyboard: React.FC = () => {
  // Define the rows and keys with types
  const rows: { [key: string]: string[] } = {
    row1: ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
    row2: ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    row3: ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"],
    row4: ["CapsLk", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    row5: ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "Shift"],
    row6: ["Ctrl", "fn", "windows", "Alt", "space", "Alt", "Ctrl", "left", "ud", "right"],
  };

  return (
    <div className="w-[80vw] inline-block bg-[#a8b0b3] p-4 rounded-xl rounded-t-none shadow-md text-gray-600 text-sm">
      {Object.keys(rows).map((rowKey: string, rowIndex: number) => (
        <div
          key={rowIndex}
          className="flex justify-between items-center space-x-1 my-2"
        >
          {rows[rowKey].map((key: string, index: number) => (
            key !== "ud" ? (
              <div
                key={index}
                className={`bg-[#111] text-white p-2 pt-4 pb-4 rounded-md ${
                  key === "space" ? "w-[60vw] h-14" : ""
                } cursor-hover ${
                  key === " " ? "w-10" : "px-5"
                } ${
                  rowKey === "row5" && (index === 0 || index === rows[rowKey].length - 1)
                    ? "px-6"
                    : ""
                }`}
              >
                {key === "windows" ? <SiWindows11 /> : key === "space" ? "" : key === "left" ? <FaAngleLeft /> : key === "right" ? <FaAngleRight /> : key}
              </div>
            ) : (
              <div
                key={index}
                className="flex flex-col items-center justify-between bg-[#111] text-white p-2 rounded-md shadow-inner w-[20vh] h-12 cursor-hover"
              >
                <FaAngleUp />
                <hr className="w-[5rem] h-1 bg-[#a8b0b3]" />
                <FaAngleDown />
              </div>
            )
          ))}
        </div>
      ))}
      <div className="w-full h-[30vh] flex justify-center items-center pr-16 cursor-hover">
        <div className="bg-[#878787] rounded-md w-[50%] h-full"></div>
      </div>
    </div>
  );
};

export default Keyboard;
