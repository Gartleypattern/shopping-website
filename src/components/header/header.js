import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LoginPopup } from "../modals/loginPopup";
import { CardPopup } from "../modals/cardPopup";
import { SearchInput } from "../inputs/searchInput";
import { useSelector} from 'react-redux';


export const Header = ()=> {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);    
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false);    
    
    const closeLoginModal= ()=>{
        setLoginModalIsOpen(false);
    }

    const closeCardModal= ()=>{
        setCardModalIsOpen(false);
    }

    const openLoginModal= ()=>{
        setLoginModalIsOpen(true);
    }

    const openCardModal= ()=>{
        setCardModalIsOpen(true);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        closeLoginModal();
      };

    const counter = useSelector((state) => state.counter);

    return(
        <div className='container-fluid shadow navbar sticky-top navbar-light bg-light'>
            <div className='container d-flex' style={{height:'68px'}}>
                <NavLink to='/'>
                    <img src='img/logo.png' style={{maxWidth:'110px'}} alt='' />
                </NavLink>
                <SearchInput 
                    width='50%'
                    marginRight='20px'
                />
                <div className='d-flex' style={{marginRight:'200px'}} >
                    <p><button onClick={openLoginModal}  className='btn btn-primary'>ورود</button></p>
                    <p><NavLink to='/register' className='btn btn-primary mx-2'>عضویت</NavLink></p>
                    <p><button onClick={openCardModal} className='btn btn-primary'>
                            <span className='badge mt-1'>{counter}</span>
                            <img src='img/card.png' style={{width:'20px'}} alt='' />
                        </button>
                    </p>
                </div>
            </div>
            <div className='container-fluid my-3' style={{borderBottom:'1px solid #E7E7E7'}}></div>
            <div className=' container d-flex justify-content-between'>
                <div className='d-flex menu'>
                    <NavLink 
                        className='text-dark text-decoration-none' 
                        to='/'
                    >
                    خانه
                    </NavLink>
                    <NavLink 
                        className='text-dark text-decoration-none' 
                        to='/shop'
                    >فروشگاه
                    </NavLink>
                    <NavLink 
                        className='text-dark text-decoration-none' 
                        to='/blog'
                    >بلاگ
                    </NavLink>
                    <NavLink
                        className='text-dark text-decoration-none' 
                        to='/about'
                    >درباره ما
                    </NavLink>
                    <NavLink 
                        className='text-dark text-decoration-none' 
                        to='/contact'
                    >ارتباط با ما
                    </NavLink>
                </div>
                <div className='d-flex mt-5'>
                    <LoginPopup 
                        modalIsOpen={loginModalIsOpen}
                        closeModal={closeLoginModal}
                        handleSubmit={handleSubmit}
                    />
                    <CardPopup 
                        CardModalIsOpen={cardModalIsOpen}
                        closeCardModal={closeCardModal}
                    />
                </div>
            </div>
        </div>
    );
};