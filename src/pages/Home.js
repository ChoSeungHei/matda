import React,{useState,useEffect} from 'react';
import { FiMenu,FiChevronRight,FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Home = () => {
    const [isopen,setIsopen] = useState(false);
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [isLogin,setIsLogin] = useState(false);
    
    const goMenu = () => {
        setIsopen(!isopen);
    }

    useEffect(() => {
        var test = localStorage.getItem("email");
        var test2 = localStorage.getItem("name");
        if(test !== null && test2 !== null)
        {
            setEmail(test);
            setName(test2);
            setIsLogin(true);
        }
    },[]);
  
    const items = [{id:0,title:"회원정보",link:"/userinfo"},{id:1,title:"공지사항",link:"/"},{id:2,title:"로그아웃",link:"/"}];
    const menuList = items.map((menu,index)=>(<div className="m-3" key={menu.id}><Link to={menu.link}><span className="link_style">{menu.title}</span></Link><hr/></div>))
    return (
        <div>
            {
                isopen ? (
                    <div>
                        <div className="div2">
                            <div className="row">
                                <div className="col m-4">
                                    <FiX size="1.5em" onClick={goMenu}/>
                                </div>  
                            </div>
                            <div className="login_box vertical-center">
                                <div className="m-3">
                                    {name}<br/> 
                                    등록리뷰: 0건
                                </div>
                            </div>
                            <div className="m-4">
                                {menuList}
                            </div>
                        </div>
                        <div className="div1" onClick={goMenu}></div>
                    </div>
                ):null
            }
            <div className="row">
                <div className="col m-4">
                    <h3>Matda<span role="img" aria-label="hamburger">🍔</span> </h3>
                </div>
                <div className="col text-right m-4">
                    <FiMenu size={"1.5em"} onClick={goMenu}/>
                </div>
            </div>
            <div className="login_div vertical-center">
                {
                    isLogin? (
                    <div className="m-4">
                        {name}님 안녕하세요.
                    </div>
                    ):(
                        <div className="m-4">
                            <FiChevronRight size={"1.5em"}/>
                            <Link to="/login"><span className="align-middle link_style">로그인 해주세요</span></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;