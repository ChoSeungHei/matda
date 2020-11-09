import React,{useState,useEffect} from 'react';
import { FiChevronLeft } from "react-icons/fi";
import {goBack} from '../function/reg_check';
import {fetchMyReview} from '../API/reviewAPI';

const MyReview = () => {

    const [reviewList,setReviewList] = useState([]);

    useEffect(() => {
        var temp = localStorage.getItem("email");
        fetchMyReview(temp,10)      //10단위로 커짐(10, 20, 30 ...)
        .then(res=>{
            if(res.success == 'Y')
            {
               setReviewList(JSON.parse(res.rows));
            }
        })
    },[]);

    return(
        <div>
            <div className="row">
                <div className="bar_arrow">
                    <FiChevronLeft size="1.5em" onClick={goBack}/>
                </div>
                <div className="col text-center bar_title">
                    마이리뷰
                </div>
            </div>
        </div>
    );
}

export default MyReview;