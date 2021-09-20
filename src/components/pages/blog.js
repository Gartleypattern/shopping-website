import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Copywrite} from '../footer/copyright';
import {MainTitle} from '../title/mainTitle';
import {SubTitle} from '../title/subtitle';
import {CenterDivider} from '../diveder/centerDivider';
import { Badge } from '../badges/badge';
import {NavLink} from 'react-router-dom';

export const Blog= () => {
    return(
        <div>
            <Header />
            <div className='container-fluid pt-3 pb-5' style={{background:'#F6F6F6'}}>
                <div className='mb-5'>
                    <MainTitle 
                        title='بایگانی دسته : تولید محتوا' 
                        color='success'
                        size='1.5em'
                    />
                </div>
                <NavLink 
                    to='/10 fact about instagram algoritm'
                    className='text-decoration-none text-dark'
                >
                <div className='container'>
                    <div className='row g-0'>
                        <div className='col-xl-2'></div>
                        <div className='col-xl-4 position-relative' 
                             style={{textAlign:'left'}}
                        >
                            
                            <img 
                                className='blog-img'
                                src='img/InstagramAlgorithm.jpg' 
                                style={{
                                    width:'400px', 
                                    height:'230px',
                                    borderRadius:'0px 7px 7px 0px'
                                }} 
                                alt=''
                            />
                            <Badge 
                                badgeDate = '10'
                                badgeMonth = 'شهریور'
                                top='20px'
                                right='38px'
                            />
                        </div>
                        <div 
                            className='col-xl-4 blog-text' 
                            style={{background:'white', borderRadius:'7px 0px 0px 7px'}}
                        >
                            <MainTitle 
                                title='10 حقیقت مهم درباره الگوریتم اینستاگرام' 
                                color='success'
                                size='1.15em'
                            />
                            <CenterDivider 
                                width='40px' 
                                color='#E5E5E5'
                            />
                            <div className='mx-5'>
                                <SubTitle 
                                    title='شایعات زیادی درباره الگوریتم اینتاگرام وجود دارد، اما ما 10 حقیقت مهم درباره این الگوریتم را ...' 
                                    size='.9em'
                                />
                            </div>
                        </div>
                        <div className='col-xl-2'></div>
                    </div>
                </div>
                </NavLink>
                <NavLink 
                    to='/7 نکته در مورد میکروفن‌های Rode Wireless GO II'
                    className='text-decoration-none text-dark'
                >
                <div className='container'>
                    <div className='row g-0 mt-5'>
                        <div className='col-xl-2'></div>
                        <div className='col-xl-4 position-relative'
                             style={{textAlign:'left'}}
                        >
                            <img 
                                className='blog-img'
                                src='img/Rode.jpg' 
                                style={{width:'400px', height:'230px'}} 
                                alt=''
                            />
                            <Badge 
                                badgeDate = '23'
                                badgeMonth = 'اردیبهشت'
                                top='20px'
                                right='38px'
                            />
                        </div>
                        <div className='col-xl-4 blog-text' 
                              style={{background:'white'}}
                        >
                            <MainTitle 
                                title='7 نکته در مورد میکروفن‌های Rode Wireless GO II' 
                                color='success'
                                size='1.15em'
                            />
                            <CenterDivider 
                                width='40px'
                                color='#E5E5E5'
                            />
                            <div className='mx-5'>
                                <SubTitle 
                                    title='  1. دارای دکمه Power قابل تنظیم دکمه Power روی Transmitter یا فرستنده این دستگاه ...                                        ' 
                                    size= '.9em'
                                />
                            </div>
                        </div>
                        <div className='col-xl-2'></div>
                    </div>
                </div>
                </NavLink>
                <NavLink 
                    to='/آشنایی با انواع الگوهای قطبی میکروفن‌ها'
                    className='text-decoration-none text-dark'
                >
                    <div className='container'>
                        <div className='row g-0 mt-5'>
                            <div className='col-xl-2'></div>
                            <div className='col-xl-4 position-relative'
                                 style={{textAlign:'left'}}
                            >
                                <img 
                                    className='blog-img'
                                    src='img/MicrophonePolarPatterns.jpg' 
                                    style={{
                                        width:'400px', 
                                        height:'230px',
                                        borderRadius:'0px 7px 7px 0px'
                                    }} 
                                    alt=''
                                />
                                <Badge 
                                    badgeDate = '29'
                                    badgeMonth = ' اسفند'
                                    top='20px'
                                    right='20px'
                                />
                            </div>
                            <div className='col-xl-4 blog-text' 
                                 style={{
                                     background:'white',
                                     borderRadius:'7px 0px 0px 7px'
                                    }}
                            >
                                <MainTitle 
                                title='آشنایی با انواع الگوهای قطبی میکروفن‌ها' 
                                color='success'
                                size='1.15em'
                                />
                                <CenterDivider 
                                    width='40px' 
                                    color='#E5E5E5'
                                />
                                <div className='mx-5'>
                                    <SubTitle 
                                        title='میکروفن‌ها نسبت به صداهای محیط اطراف خود از جهات مختلف حساس، غیر حساس و یا ...                                        ' 
                                        size= '.9em'
                                    />
                                </div>
                            </div>
                            <div className='col-xl-2'></div>
                        </div>
                </div>
            </NavLink>
            </div>
            <Footer />
            <Copywrite />
        </div>
    );
};