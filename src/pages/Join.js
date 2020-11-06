import React,{useState,useEffect} from 'react';
import {fetchJoin,regionList} from '../API/loginAPI';
import '../css/style.css';
import '../css/check_mark.css';
import {CheckEmail,CheckPw,goBack} from '../function/reg_check';
import { FiChevronLeft } from "react-icons/fi";

const Join = ({ history }) => {
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');
  const [name,setName] = useState('');
  const [pwAnswer,setPwAnswer] = useState('');
  const [isSeoul,setIsSeoul] = useState("true");
  const [address,setAddress] = useState('강남구');
  const [emailCk,setEmailCk] = useState(false);
  const [pwCk,setPwCk] = useState(false);
  const [nameCk,setNameCk] = useState(false);
  const [pwQId,setQId] = useState("1");
  const [pwACk,setPwACk] = useState(false);
  const [region,setRegion] = useState([]);

  useEffect(() => {
    regionList()
    .then(res => {
      setRegion(res);
    })
  },[]);

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
        if(e.target.value.length>1)
        {
          setPwACk(true);
        }
        else
        {
          setPwACk(false);
        }
    }
  const changeIsSeoul = (e) => {
        setIsSeoul(e.target.value);
        if(e.target.value === "false")
        {
          setAddress('');
        }
        console.log(e.target.value);
    }
  const changeAddress = (e) => {
        setAddress(e.target.value);
    }
  
  const handleSubmit = () => {
    if(emailCk === false || pwCk === false|| nameCk === false||pwACk === false)
    {
        var text = " 을(를) 확인해주세요.";
        if(emailCk === false)
        {
            text = "이메일/" + text;
        }

        if(pwCk === false)
        {
          text = "비밀번호/"+text;
        }

        if(nameCk === false)
        {
          text = "이름/" + text;
        }

        if(pwACk === false)
        {
          text = "비밀번호응답/" + text;
        }

        alert(text);
    }
    else
    {
        fetchJoin(email,pw,name,pwAnswer,isSeoul,address,pwQId);
        alert("회원가입 완료");
        history.push('/');
    }
    
  }

  const changeQuestion = (e) => {
    setQId(e.target.value);
  }

  const regionSet = region.map((obj) => (<option key={obj.id} value={obj.name}>{obj.name}</option>) );
  return(
      <div>
        <div className="row">
            <div className="bar_arrow">
                <FiChevronLeft size="1.5em" onClick={goBack}/>
            </div>
            <div className="col text-center bar_title">
                회원가입
            </div>
        </div>
        <div className="row">
          <div className="col text-center m-5">
            <h3>Matda <span role="img" aria-label="balloon">🎈</span> </h3>
          </div>
        </div>
        <div className="row">
          <div className="col text-center login_input form-inline">
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
          <div className="col text-center login_input form-inline">
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
          <div className="col text-center login_input form-inline">
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
          <div className="col text-center login_input">
              <select className="form-control input-width" id="exampleFormControlSelect1" onChange={changeQuestion}>
                <option value="1">졸업한 초등학교 이름은?</option>
                <option value="2">가장 좋아하는 색은?</option>
                <option value="3">가장 감명깊게 읽은 책은?</option>
                <option value="4">어릴적 살던 동네 이름은?</option>
                <option value="5">다른 이메일 주소는?</option>
              </select>
          </div>
        </div>
        <div className="row">
          <div className="col login_input form-inline">
            <input maxLength="20" className="form-control input-width" placeholder="PwAnswer" onChange={changeAnswer} value={pwAnswer}/>
            {
                pwACk === true ? (
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
          <div className="col login_input">
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" value={true} onChange={changeIsSeoul} defaultChecked/>
                <label className="custom-control-label" htmlFor="customRadio1">수도권</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" value={false} onChange={changeIsSeoul}/>
                <label className="custom-control-label" htmlFor="customRadio2">비수도권</label>
              </div>
          </div>
        </div>
        {
          isSeoul === "true" ? (
            <div className="row">
              <div className="col login_input form-inline">
                <select className="form-control input-width" id="exampleFormControlSelect1" onChange={changeAddress}>
                  {regionSet}
                </select>
              </div>
            </div>
          ):null
        }
        <div className="row">
          <div className="col login_input">
            <button onClick={handleSubmit} type="button" className="btn btn-info">제출</button>
          </div>
        </div>
      </div>
  );
}

export default Join;
