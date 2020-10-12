import React from 'react';
import { FiMenu,FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Home = () => {
    const goMenu = () => {
        console.log('click');
    }

    return (
        <div>
            <div className="row">
                <div className="col m-4">
                    <h3>Matda<span role="img" aria-label="hamburger">🍔</span> </h3>
                </div>
                <div className="col text-right m-4">
                    <FiMenu size={"1.5em"} onClick={goMenu}/>
                </div>
            </div>
            <div className="login_div vertical-center">
                <div className="m-4">
                    <FiChevronRight size={"1.5em"}/>
                    <Link to="/login"><span className="align-middle">로그인 해주세요</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;