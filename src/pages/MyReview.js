import React,{useState,useEffect} from 'react';
import { FiChevronLeft } from "react-icons/fi";
import {goBack} from '../function/reg_check';
import {fetchMyReview,fetchTotalCnt} from '../API/reviewAPI';
import Pagination from 'react-bootstrap/Pagination';


const MyReview = () => {

    const [reviewList,setReviewList] = useState([]);
    const [totalCnt,setTotalCnt] = useState(0);
    const [pageCnt,setPageCnt] = useState(0);
    const [recentTot,setRecentTot] = useState(1);
    const [recentPage,setRecentPage] = useState(1);

    useEffect(() => {
        var temp = localStorage.getItem("email");
        var page = recentTot *10;
        fetchMyReview(temp,page)      //10단위로 커짐(10, 20, 30 ...)
        .then(res=>{
            if(res.success == 'Y')
            {
               setReviewList(JSON.parse(res.rows));
            }
        })

        fetchTotalCnt(temp)
        .then(res=>{
            if(res.success == "Y")
            {
                setTotalCnt(res.totalCnt);
                setPageCnt(res.pageCnt);
            }
        })
    },[]);

    const myList = reviewList.map((review,index)=>(
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{review.title}</td>
            <td class="table_addr" title={review.location}>{review.location}</td>
            <td>{review.rate} 점</td>
        </tr>
    ));

    const pageSelect = (number) => {
        setRecentPage(number);
        var temp = localStorage.getItem("email");
        fetchMyReview(temp,number*10)      //10단위로 커짐(10, 20, 30 ...)
        .then(res=>{
            if(res.success == 'Y')
            {
               setReviewList(JSON.parse(res.rows));
            }
        })
    }
    const totClick = () => {
        var temp = recentTot;
        setRecentTot(--temp);
    }
    const totClick2 = () => {
        var temp = recentTot;
        setRecentTot(++temp);
    }
    let items = [];
    if(recentTot>1)
    {
        items.push(
            <Pagination.Prev onClick={totClick}/>
        );
        
    }

    var end = 7;
    if(pageCnt<8)
    {
        end = pageCnt;
    }
    var check = 1;
    if(recentTot != 1)
    {
        check = 8 * (recentTot-1) + 1
    }

    for (let number = check; number <= end + check; number++) {
        items.push(
            <Pagination.Item key={number} active={number === recentPage} onClick={()=>pageSelect(number)}>
            {number}
            </Pagination.Item>,
        );
    }
    if(recentTot<totalCnt)
    {
        items.push(
            <Pagination.Next onClick={totClick2}/>
        );
    }

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
            <div className="row">
                <div className="col m-4">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">상호</th>
                        <th scope="col">주소</th>
                        <th scope="col">점수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myList}
                    </tbody>
                    </table>
                    <Pagination>{items}</Pagination>
                </div>
            </div>
        </div>
    );
}

export default MyReview;