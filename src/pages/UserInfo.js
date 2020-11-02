import React,{useState,useEffect} from 'react';
import { FiChevronLeft } from "react-icons/fi";
import {goBack} from '../function/reg_check';
import {fetchLogin,fetchUser} from '../API/loginAPI';

const UserInfo = ({ history }) => {
    const [email,setEmail] = useState('');
    const [pw,setPw] = useState('');
    const [check,setCheck] = useState(false);
    const [info,setInfo] = useState('');

    const check_pw = () => {
        fetchLogin(email,pw)
        .then(res => {
            if(res.success == "Y")
            {
                setCheck(true);
            }
            else
            {
                alert("아이디 혹은 비밀번호 오류");
                setEmail("");
                setPw("");
            }
        })
    }

    const changePassword = (e) => {
        setPw(e.target.value);
    }

    useEffect(() => {
        var temp = localStorage.getItem("email");
        if(temp !== null )
        {
            setEmail(temp);
        }
        fetchUser(temp)
        .then(res=>{
            if(res.success == 'Y')
            {
                var temp = JSON.parse(res.rows);
                setInfo(temp);
            }
        })
    },[]);

    return(
        <div>
           {
               check ? (
                   <div>
                        <div className="row">
                            <div className="bar_arrow">
                                <FiChevronLeft size="1.5em" onClick={goBack}/>
                            </div>
                            <div className="col text-center bar_title">
                                회원정보
                            </div>
                        </div>
                        <div className="login_box vertical-center">
                            <div className="m-3">
                                email: {info[0].email}<br/>
                                name: {info[0].name}<br/>
                                address: {info[0].address}
                            </div>
                        </div>
                   </div>
               ):(
                    <div>
                        <div className="row">
                            <div className="bar_arrow">
                                <FiChevronLeft size="1.5em" onClick={goBack}/>
                            </div>
                            <div className="col text-center bar_title">
                                회원정보
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center pw_ck">
                                <input className="form-control" type="password" maxLength="50" placeholder="password" onChange={changePassword} value={pw} autoFocus/>
                                <small>개인정보보호를 위해 비밀번호를 입력해주세요.</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <button className="btn btn-info" onClick={check_pw}>확인</button>
                            </div>
                        </div>
                    </div>
               )
           }
        </div>
    );
}

export default UserInfo;