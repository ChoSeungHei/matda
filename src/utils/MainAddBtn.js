import React from "react";
import { Link } from 'react-router-dom';

const MainAddBtn = (props) => {

    return(
        <div className="col m-2">
            <Link to={{
                pathname: "./AddReview",
                state:{
                    addr : props.addr
                }
            }}>
                <button className="btn btn-success" id="addBtn">리뷰하기</button>
            </Link>
        </div>
    );
}

export default MainAddBtn;