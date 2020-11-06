import React, { useEffect,useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import {goBack} from '../function/reg_check';
import ReactStars from "react-rating-stars-component";
import {fetchReview} from '../API/reviewAPI';
import { useHistory } from "react-router-dom";

const AddReview = (props) => {
    const [address,setAddress] = useState('');
    const [title,setTitle] = useState('');
    const [rate,setRate] = useState('');
    const [comment,setCommnet] = useState('');

    const history = useHistory();

    useEffect(() => {
        setAddress(props.location.state.addr);
    },[props]);

    const ratingChanged = (newRating) => {
        setRate(newRating);
        console.log(newRating);
    };

    const handleCommnet = (e) => {
        setCommnet(e.target.value);
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handelSubmit = () => {
        var email = localStorage.getItem("email");
        if(email == null )
        {
            alert('로그인이 필요합니다.');
            history.push('/login');
        }
        else
        {
            fetchReview(email,title,rate,comment,address);
            console.log('success');
        }
        
    } 

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
                    <div className="col m-3">
                        <strong>주소</strong><br/>{address}
                    </div>
                </div>
                <div className="row">
                    <div className="col m-3">
                        <strong>상호</strong>
                        <input className="form-control" onChange={handleTitle} value={title}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col m-3">
                        <strong>별점</strong>
                        <ReactStars 
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                         />
                    </div>
                </div>
                <div className="row">
                    <div className="col m-3">
                        <strong>한줄평</strong>
                        <input className="form-control" onChange={handleCommnet} value={comment}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col m-3">
                        <button className="btn btn-success" onClick={handelSubmit}>등록</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddReview;