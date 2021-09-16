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
                <MainTitle 
                    title= 'همین الان عضو شوید'
                    size= '2.5em'
                    color= 'success'
                />
                <CenterDivider 
                    width= '60px'
                    color= 'gray'
                />
                <div className='row mt-5' style={{background: '#FAFAFA'}}>
                    <div className='col'>
                        <img src='img/register.jpg' style={{width:'600px', height:'600px'}} alt='' />
                    </div>
                    <div className='col'>
                        <RegisterForm />
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