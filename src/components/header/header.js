import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LoginPopup } from "../modals/loginPopup";
import { CardPopup } from "../modals/cardPopup";
import { SearchInput } from "../inputs/searchInput";
import { useSelector} from 'react-redux';


export const Header = ()=> {
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);    
    const [cardModalIsOpen, setCardModalIsOpen] = useState(false); 
    const [showNavbar, setShowNavbar] = useState('false');   
    
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
    
    const navbarToggle = () =>{
        setShowNavbar(state => !state);
    } 

    return(
        <>
            {/* mobile menu */}

            <div className=' container d-block d-sm-none shadow px-3'>
                <div className='row'>
                    <div className='col mt-2'>
                        <button type='button' 
                                className='btn'
                                onClick={navbarToggle}
                        >
                            <img src='img/Hamburger.png' style={{maxWidth:'50px'}} alt='' />
                        </button>
                    </div>
                    <div className='col'>
                        <NavLink to= '/' >
                            <img src='img/logo.png' style={{maxWidth:'80px'}} alt='' />
                        </NavLink>
                    </div>
                    <div className='col mt-3'>
                        <button onClick={openCardModal} className='btn btn-primary'>
                                <span className='badge mt-1'>{counter}</span>
                                <img src='img/card.png' style={{width:'20px'}} alt='' />
                        </button>
                    </div>
                </div>
                <div>
                    <nav className={`${showNavbar?'d-none':''} d-flex flex-column`}>
                        <NavLink 
                            className='text-dark text-decoration-none nav-link' 
                            to='/'
                        >خانه
                        </NavLink>
                    <NavLink 
                        className='text-dark text-decoration-none nav-link' 
                        to='/shop'
                        >فروشگاه
                    </NavLink>
                    <NavLink 
                        className='text-dark text-decoration-none nav-link' 
                        to='/blog'
                        >بلاگ
                    </NavLink>
                    <NavLink
                        className='text-dark text-decoration-none nav-link' 
                        to='/about'
                        >درباره ما
                    </NavLink>
                    <NavLink 
                        className='text-dark text-decoration-none nav-link' 
                        to='/contact'
                        >ارتباط با ما
                    </NavLink>
                    </nav>
                </div>
            </div>

            {/* desktop menu */}

            <div className='container-fluid d-none d-sm-block shadow navbar navbar-expan sticky-top navbar-light bg-light'>
            <div className='mobile-menu'>sddfdfdfd</div>
            <div className='container' style={{height:'68px'}}>
                <NavLink to='/'>
                    <img src='img/logo.png' style={{maxWidth:'110px'}} alt='' />
                </NavLink>
                <SearchInput 
                    width='50%'
                    marginRight='20px'
                />
                <div>
                    <button onClick={openLoginModal}  className='btn btn-primary'>ورود</button>
                    <NavLink to='/register' className='btn btn-primary mx-2'>عضویت</NavLink>
                    <button onClick={openCardModal} className='btn btn-primary'>
                            <span className='badge mt-1'>{counter}</span>
                            <img src='img/card.png' style={{width:'20px'}} alt='' />
                    </button>
                </div>
            </div>
            <div className='container-fluid my-3' style={{borderBottom:'1px solid #E7E7E7'}}></div>
            <nav className='d-flex menu px-5'>
                <NavLink 
                    className='text-dark text-decoration-none nav-link' 
                    to='/'
                >خانه
                </NavLink>
                <NavLink 
                    className='text-dark text-decoration-none nav-link' 
                    to='/shop'
                    >فروشگاه
                </NavLink>
                <NavLink 
                    className='text-dark text-decoration-none nav-link' 
                    to='/blog'
                    >بلاگ
                </NavLink>
                <NavLink
                    className='text-dark text-decoration-none nav-link' 
                    to='/about'
                    >درباره ما
                </NavLink>
                <NavLink 
                    className='text-dark text-decoration-none nav-link' 
                    to='/contact'
                    >ارتباط با ما
                </NavLink>
            </nav>
        </div>
            <LoginPopup 
                modalIsOpen={loginModalIsOpen}
                closeModal={closeLoginModal}
                handleSubmit={handleSubmit}
            />
            <CardPopup 
                CardModalIsOpen={cardModalIsOpen}
                closeCardModal={closeCardModal}
            />
        </>
        
    );
};