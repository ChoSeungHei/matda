import React,{useState} from 'react';
import { FiChevronLeft } from "react-icons/fi";
import {goBack} from '../function/reg_check';

const UserInfo = () => {
    return(
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
                <div className="col text-center m-5">
                    <input className="form-control" type="password" maxLength="50" placeholder="password" autoFocus/>
                    <small>개인정보보호를 위해 비밀번호를 입력해주세요.</small>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-info">확인</button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;