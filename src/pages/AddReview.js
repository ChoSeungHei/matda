import React, { useEffect,useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import {goBack} from '../function/reg_check';
const AddReview = (props) => {
    const [address,setAddress] = useState('');

    useEffect(() => {
        setAddress(props.location.state.addr);
    },[props]);

    return(
        <div>
            <div className="row">
                <div className="bar_arrow">
                    <FiChevronLeft size="1.5em" onClick={goBack}/>
                </div>
                <div className="col text-center bar_title">
                    신규리뷰등록
                </div>
            </div>
            <div className="add_form">
                <div className="row">
                    <div className="col m-4">
                        <strong>주소</strong><br/>{address}
                    </div>
                </div>
                <div className="row">
                    <div className="col m-4">
                        <strong>상호</strong>
                        <input className="form-control"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddReview;