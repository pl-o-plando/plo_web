import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import { GoPlusCircle } from "react-icons/go";

const Setting = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const pw = "12345678a!"

  const [enteredPw, setEnteredPw] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newPwCk, setNewPwCk] = useState('');
  const [newPwM, setNewPwM] = useState('');

  const handlePwSubmit = () => {
    if (enteredPw === pw) {
      setPwMessage("비밀번호가 일치합니다.");
    } else {
      setPwMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleNewPwSubmit = () => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,18}$/;
    const isNewPwValid = passwordRegex.test(newPw);
  
    if (!isNewPwValid) {
      setNewPwM("영문, 숫자, 특수문자를 포함한 8자 이상 18자 이하의 비밀번호를 입력하세요.");
    } else if (newPw !== newPwCk) {
      setNewPwM("비밀번호가 일치하지 않습니다.");
    } else {
      setNewPwM("비밀번호가 일치합니다.");
    }
  };
  
  // 닉네임, 각오
  const [nickname, setNickname] = useState('nickname');
  const [newNickname, setNewNickname] = useState('');
  const [isNicknameChanged, setIsNicknameChanged] = useState(false);
  const [md, setMd] = useState('아자아자 화이팅');
  const [newMd, setNewMd] = useState('');
  const [isMdChanged, setIsMdChanged] = useState(false);

  // 카테고리와 루틴
  const [categoriesAndRoutines, setCategoriesAndRoutines] = useState([{ category: '', routines: [''] }]);

  // 닉네임 수정 
  const handleNicknameEdit = () => {
    setNickname(newNickname);
    setNewNickname('');
    setIsNicknameChanged(true);
  };

  // 각오 수정 
  const handleMdEdit = () => {
    setMd(newMd);
    setNewMd('');
    setIsMdChanged(true);
  }

  // 카테고리 추가
  const handleAddCategory = () => {
    setCategoriesAndRoutines([...categoriesAndRoutines, { category: '', routines: [''] }]);
  };

  // 카테고리 변경 
  const handleCategoryChange = (index, value) => {
    const newCategoriesAndRoutines = [...categoriesAndRoutines];
    newCategoriesAndRoutines[index].category = value;
    setCategoriesAndRoutines(newCategoriesAndRoutines);
  };

  // 루틴 추가 
  const handleAddRoutine = (index) => {
    const newCategoriesAndRoutines = [...categoriesAndRoutines];
    newCategoriesAndRoutines[index].routines.push('');
    setCategoriesAndRoutines(newCategoriesAndRoutines);
  };

  // 루틴 변경 
  const handleRoutineChange = (categoryIndex, routineIndex, value) => {
    const newCategoriesAndRoutines = [...categoriesAndRoutines];
    newCategoriesAndRoutines[categoryIndex].routines[routineIndex] = value;
    setCategoriesAndRoutines(newCategoriesAndRoutines);
  };

  // 카테고리 삭제 
  const handleDeleteCategory = (index) => {
    if (categoriesAndRoutines.length > 1) {
      const newCategoriesAndRoutines = [...categoriesAndRoutines];
      newCategoriesAndRoutines.splice(index, 1);
      setCategoriesAndRoutines(newCategoriesAndRoutines);
    }
  };
  
  // 루틴 삭제 
  const handleDeleteRoutine = (categoryIndex, routineIndex) => {
    const category = categoriesAndRoutines[categoryIndex];
    if (category.routines.length > 1) {
      const newCategoriesAndRoutines = [...categoriesAndRoutines];
      newCategoriesAndRoutines[categoryIndex].routines.splice(routineIndex, 1);
      setCategoriesAndRoutines(newCategoriesAndRoutines);
    }
  };

  return (
    <div className='my-11'>
      <div className='flex bg-[#E5D1FA] mb-5 border-[#976EC2] border-2 h-[14rem]'>
        <div className='flex justify-center items-center flex-col w-[28rem] mb-5 border-[#976EC2] border-r-2 h-full'>
          <p className='text-6xl text-[#976EC2] italic font-extrabold mb-7' style={{WebkitTextStroke:"2px #fff"}}>pl&o</p>
          <div className='bg-white rounded w-[15rem] h-[3rem] flex justify-center items-center border-[#976EC2] border-2 text-xl'>{nickname} 님</div>
        </div>
        <div className='flex flex-col w-[32rem]'>
          <p className='text-3xl text-[#976EC2] mt-1 w-11/12 my-0 mx-auto h-[3rem] flex items-center font-extrabold' style={{WebkitTextStroke:"1px #fff"}}>각오</p>
          <textarea 
            className='text-2xl resize-none outline-none p-3 w-11/12 h-[7rem] my-0 mx-auto rounded border-[#976EC2] border-2' 
            placeholder={isMdChanged ? md : "아자아자 화이팅"} 
            value={newMd} 
            onChange={(event) => setNewMd(event.target.value)} 
            maxLength={36}
          />
          <div className='w-11/12 my-0 mx-auto mt-2'>
            <div className='float-right bg-[#976EC2] w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold' onClick={handleMdEdit}>수정</div>
          </div>
        </div>
      </div>
      <div className='bg-[#E5D1FA] border-[#976EC2] border-2 text-2xl text-[#976EC2] font-bold'>
        <div className='flex items-center h-[8rem] w-11/12 my-0 mx-auto justify-end'>
          <p className='flex grow'>닉네임</p>
          <input 
            className='outline-none text-black pl-3 h-11 w-[34rem] font-normal border-[#976EC2] border-2 rounded grow-2' 
            placeholder={isNicknameChanged ? nickname : "nickname"} 
            value={newNickname} 
            onChange={(event) => setNewNickname(event.target.value)} 
            maxLength={9} 
          />
          <div className='ml-8 bg-[#976EC2] w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold'onClick={handleNicknameEdit}>수정</div>
        </div>
        <hr style={{ borderBottom: '2px solid #976EC2' }}/>
        <div className='h-[22rem] flex flex-col justify-evenly'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center w-11/12 mb-4 mx-auto'>
            <p className='flex grow'>현재 비밀번호</p>
            <input 
              type='password' 
              className='outline-none text-black pl-3 h-11 w-[34rem] font-normal border-[#976EC2] border-2 rounded grow-2'
              value={enteredPw}
              onChange={(e) => setEnteredPw(e.target.value)}
            />
            <div className='ml-8 bg-[#976EC2] w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold' type="submit" onClick={handlePwSubmit}>확인</div>
          </div>
          <div className='h-3 w-11/12 text-lg mx-auto text-[#FF9C9C]'>{pwMessage}</div>
          </form>
          <form>
            <div className='flex items-center w-11/12 mb-4 mx-auto'>
              <p className='flex grow'>새 비밀번호</p>
              <input 
                type='password' 
                className='outline-none text-black pl-3 h-11 w-[34rem] font-normal border-[#976EC2] border-2 rounded grow-2'
                value={newPw} 
                onChange={(e) => setNewPw(e.target.value)} 
              />
              <div className='ml-8 w-[6rem] h-10 '></div>
            </div>
            <div className='w-11/12 my-0 mx-auto text-lg text-[#FF9C9C]'>
              {errors.password && errors.password.message}
            </div>
            <div className='flex items-center w-11/12 mx-auto'>
              <p className='flex grow'>새 비밀번호 확인</p>
              <input 
                type='password' 
                className='outline-none text-black pl-3 h-11 w-[34rem] font-normal border-[#976EC2] border-2 rounded grow-2'
                value={newPwCk} 
                onChange={(e) => setNewPwCk(e.target.value)} 
              />
              <div className='ml-8 bg-[#976EC2] w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold' type="submit" onClick={handleNewPwSubmit}>변경</div>
            </div>
            <div className='h-3 w-11/12 my-0 mx-auto text-lg text-[#FF9C9C] mt-5'>
              {newPwM}
            </div>
          </form>
        </div>
        <hr style={{ borderBottom: '2px solid #976EC2' }}/>
        <div>
          <div className='flex items-center w-11/12 my-0 mx-auto justify-between h-[4rem]'>
            카테고리
            <GoPlusCircle size="35" onClick={handleAddCategory} />
          </div>
          {categoriesAndRoutines.map((item, index) => (
            <div key={index}>
              <div className='flex items-center w-11/12 my-0 mx-auto justify-end'>
                <input className='outline-none text-black pl-3 h-11 my-5 flex grow font-normal border-[#976EC2] border-2 rounded' value={item.category} onChange={(event) => handleCategoryChange(index, event.target.value)} />
                <div className='bg-[#976EC2] ml-8 w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold'>수정</div>
                <div className='bg-[#976EC2] ml-4 w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold' onClick={() => handleDeleteCategory(index)}>삭제</div>
              </div>
              <div className='mb-5 flex items-center w-11/12 my-0 mx-auto justify-between'>
                  루틴
                  <GoPlusCircle size="35" onClick={() => handleAddRoutine(index)} />
              </div>
              {item.routines.map((routine, routineIndex) => (
                <div className='mb-5 flex items-center w-11/12 my-0 mx-auto justify-end' key={routineIndex} >
                  <div className='flex grow'></div>
                  <input className='outline-none text-black pl-3 h-11 w-[32rem] font-normal border-[#976EC2] border-2 rounded' value={routine} onChange={(event) => handleRoutineChange(index, routineIndex, event.target.value)} />
                  <div className='bg-[#976EC2] w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold ml-8'>수정</div>
                  <div className='bg-[#976EC2] w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold ml-4' onClick={() => handleDeleteRoutine(index, routineIndex)}>삭제</div>
                </div>
              ))}
              <hr className='mt-4' style={{ borderBottom: '2px solid #976EC2' }}/>
            </div>
          ))}
        </div>
        <div className='w-11/12 my-0 mx-auto h-[8rem] flex flex-col justify-center'>
          <div className='flex items-center justify-between mb-5'>
            회원탈퇴
            <div className='bg-[#FF9C9C] w-[6rem] h-10 text-white rounded-xl flex justify-center items-center text-2xl font-bold'>탈퇴</div>
          </div>
          <span className='text-lg text-[#FF9C9C]'>탈퇴 시 작성하신 모든 정보는 삭제되며 복구가 불가능합니다.</span>
        </div>
      </div>
    </div>
  );
}

export default Setting;
