import React,{useState} from 'react';
import {fetchLogin} from '../API/loginAPI';
const Login = () => {
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
                console.log('login success');
            }
            else
            {
                console.log('login fail');
            }
        })
    }
    return(
        <div className="form_container">
            <div className="row">
                <div className="col text-center m-5">
                    <h3>로그인 <span role="img" aria-label="balloon">🥑</span> </h3>
                </div>
            </div>
            <div className="row">
                <div className="col text-center m-1 form-inline">
                    <input className="form-control" maxLength="50" placeholder="Email" autoFocus onChange={changeEmail} value={email}/>
                </div>
            </div>
            <div className="row">
                <div className="col text-center m-1 form-inline">
                    <input type="password" maxLength="20" className="form-control" placeholder="Password" onChange={changePassword} value={pw}/>
                </div>
            </div>
            <div className="row">
                <div className="col m-1">
                    <button onClick={handleSubmit} type="button" className="btn btn-info">로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Login;