import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {fetchJoin} from '../API/loginAPI';
import '../css/style.css';
import '../css/check_mark.css';
import {CheckEmail,CheckPw} from '../function/reg_check';

const Join = () => {
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');
  const [name,setName] = useState('');
  const [pwAnswer,setPwAnswer] = useState('');
  const [isSeoul,setIsSeoul] = useState(true);
  const [address,setAddress] = useState('');
  const [emailCk,setEmailCk] = useState(false);
  const [pwCk,setPwCk] = useState(false);
  const [nameCk,setNameCk] = useState(false);

  const changeEmail = (e) => {
      setEmail(e.target.value);
      if(CheckEmail(e.target.value))
      {
          setEmailCk(true);
      }
      else
      {
            setEmailCk(false);
      }
  }
  const changePassword = (e) => {
        setPw(e.target.value);
        if(CheckPw(e.target.value))
      {
          setPwCk(true);
      }
      else
      {
          setPwCk(false);
      }
    }
  const changeName = (e) => {
        setName(e.target.value);
        if(e.target.value.length>1)
        {
          setNameCk(true);
        }
        else
        {
          setNameCk(false);
        }
    }
  const changeAnswer = (e) => {
        setPwAnswer(e.target.value);
    }
  const changeIsSeoul = (e) => {
        setIsSeoul(e.target.value);
    }
  const changeAddress = (e) => {
        setAddress(e.target.value);
    }
  
  const handleSubmit = () => {
    fetchJoin(email,pw,name,pwAnswer,isSeoul,address);
    console.log(isSeoul);
  }
  return(
      <div className="form_container">
        <div className="row">
          <div className="col text-center m-5">
            <h3>회원가입 <span role="img" aria-label="balloon">🎈</span> </h3>
          </div>
        </div>
        <div className="row">
          <div className="col text-center m-1 form-inline">
            <input className="form-control input-width" maxLength="50" placeholder="Email" autoFocus onChange={changeEmail} value={email}/>
              {
                emailCk === true ? (
                  <svg className="checkmark d-inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                ):(
                  <small id="emailHelp" className="form-text text-danger">이메일주소 형식에 맞춰 입력하세요.</small>
                )
              }
          </div>
        </div>
        <div className="row">
          <div className="col text-center m-1 form-inline">
            <input type="password" maxLength="20" className="form-control input-width" placeholder="Password" onChange={changePassword} value={pw}/>
            {
                pwCk === true ? (
                  <svg className="checkmark d-inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                ):(
                  <small id="emailHelp" className="form-text text-danger">비밀번호 형식 : 8자이상 (영문 + 숫자 + 특수기호)</small>
                )
              }
          </div>
        </div>
        <div className="row">
          <div className="col text-center m-1 form-inline">
            <input maxLength="20" className="form-control input-width" placeholder="Name" onChange={changeName} value={name}/>
            {
                nameCk === true ? (
                  <svg className="checkmark d-inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                  </svg>
                ):(
                  <small id="emailHelp" className="form-text text-danger">1자 이상 입력하세요.</small>
                )
              }
          </div>
        </div>
        <div className="row">
          <div className="col text-center m-1">
            <input maxLength="20" className="form-control" placeholder="PwAnswer" onChange={changeAnswer} value={pwAnswer}/>
          </div>
        </div>
        <div className="row">
          <div className="col m-1">
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" value={1} onChange={changeIsSeoul} checked/>
                <label className="custom-control-label" htmlFor="customRadio1">Seoul</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" value={0} onChange={changeIsSeoul}/>
                <label className="custom-control-label" htmlFor="customRadio2">Not Seoul</label>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center m-1">
            <input maxLength="20" className="form-control" placeholder="Address" onChange={changeAddress} value={address}/>
          </div>
        </div>
        <div className="row">
          <div className="col m-1">
            <button onClick={handleSubmit} type="button" className="btn btn-info">제출</button>
          </div>
        </div>
      </div>
  );
}

export default Join;
