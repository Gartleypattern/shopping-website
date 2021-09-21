import { Header } from '../header/header';
import {MainTitle} from '../title/mainTitle';
import {Footer} from '../footer/footer';
import {Copywrite} from '../footer/copyright';
import {CenterDivider} from '../diveder/centerDivider';
import {FullWidthDiveder} from '../diveder/fullWidthDivider';
import { RegisterForm } from '../forms/registerForm';


export const Register = () => (
        <div>
            <Header />
            <div className='container mb-5'> 
                <div className='row'>
                    <div className='col-xl-10 offset-xl-1'>
                        <MainTitle 
                            title= 'همین الان عضو شوید'
                            size= '2.5em'
                            color= 'success'
                        />
                        <CenterDivider 
                            width= '60px'
                            color= 'gray'
                        />
                        <div className='row mt-5' 
                             style={{
                                 background: '#FAFAFA',
                                 borderRadius:'7px 0px 0px 7px'
                                }}
                        >
                            <div className='col-xl-5'>
                                <img 
                                    className='register-image'
                                    src='img/register.jpg' 
                                    style={{
                                        width:'500px',
                                         height:'600px',
                                         borderRadius:'0px 7px 7px 0px'
                                        }} 
                                    alt='' 
                                />
                            </div>
                            <div 
                                className='col-xl-6 offset-xl-1'
                            >
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FullWidthDiveder 
                color='#FAFAFA'
            />
            <Footer />
            <Copywrite />
        </div>
    );