import React,{useState} from 'react';
import {fetchLogin} from '../API/loginAPI';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from "react-icons/fi";
import {goBack} from '../function/reg_check';

const Login = ({history}) => {
    const [email,setEmail] = useState('');
    const [pw,setPw] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPw(e.target.value);
    }

    const handleSubmit = () => {
        fetchLogin(email,pw)
        .then(res => {
            if(res.success == "Y")
            {
                const temp =  JSON.parse(res.rows);
                localStorage.setItem("email",email);
                localStorage.setItem("name",temp[0].name);
                history.push('/');
            }
            else
            {
                alert("아이디 혹은 비밀번호 오류");
                setEmail("");
                setPw("");
            }
        })
    }

    return(
        <div>
            <div>
                <div className="row">
                    <div className="bar_arrow">
                        <FiChevronLeft size="1.5em" onClick={goBack}/>
                    </div>
                    <div className="col text-center bar_title">
                       로그인
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center m-5">
                        <h3>Matda <span role="img" aria-label="balloon">🥑</span> </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center login_input">
                        <input className="form-control" maxLength="50" placeholder="Email" autoFocus onChange={changeEmail} value={email}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center login_input">
                        <input type="password" maxLength="20" className="form-control" placeholder="Password" onChange={changePassword} value={pw}/>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col m-1">
                        <button onClick={handleSubmit} type="button" className="btn btn-info">로그인</button>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col m-1"> 
                        <Link to="/join"><u className="link_style">회원가입</u></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;