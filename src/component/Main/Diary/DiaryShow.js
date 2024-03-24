import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const DiaryShow = () => {
  const maxLines = 19;
  const maxCharacters = 912;

  const [mood, setMood] = useState('');
  const [diaryContent, setDiaryContent] = useState('일기를 작성해주세요.');
  const [newDiary, setNewDiary] = useState('');
  const [isDiaryChanged, setIsDiaryChanged] = useState(false);
  const [inputContent, setInputContent] = useState('');

  const handleSaveDiary = () => {
    setDiaryContent(newDiary);
    setIsDiaryChanged(true);
    setInputContent(mood);
  };

  const handleDiaryChange = (event) => {
    const text = event.target.value;
    const lines = text.split('\n').length;
    if (lines <= maxLines && text.length <= maxCharacters) {
      setNewDiary(text);
    }
  };

  return (
    <div className="flex flex-col mx-5">
      <div className="text-[#976EC2] text-5xl font-bold justify-start mb-14">Diary</div>
      <div className="border-[#C78ED6] border-2 rounded-xl h-[4rem] flex mb-10">
        <div className="bg-[#E5D1FA] text-[#976EC2] w-[12%] flex justify-center items-center text-3xl font-bold rounded-l-xl border-r-2 border-[#C78ED6]">기분</div>
        <input 
          maxLength="45" 
          value={mood}
          onChange={(event) => setMood(event.target.value)}
          placeholder={isDiaryChanged ? inputContent : "기분을 입력해주세요."}
          className="flex-1 rounded-r-xl text-xl p-3 outline-[#8148bd]"
        />
      </div>
      <textarea
        value={newDiary}
        onChange={handleDiaryChange}
        placeholder={isDiaryChanged ? diaryContent : "일기를 작성해주세요."}
        rows={maxLines}
        maxLength={maxCharacters}
        className="border-[#C78ED6] border-2 h-[40rem] rounded-lg mb-10 p-5 text-2xl resize-none outline-[#8148bd] overflow-hidden"
      ></textarea>
      <div className="flex justify-end">
        <div 
          className="bg-[#976EC2] w-[8rem] h-[4rem] rounded-xl text-white font-bold text-2xl flex justify-center items-center mb-8"
          onClick={handleSaveDiary}
        >
          <FaCheck color="white" size={35} />
        </div>
      </div>
    </div>
  );
};

export default DiaryShow;
