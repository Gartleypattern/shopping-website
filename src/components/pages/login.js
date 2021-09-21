import { Header } from "../header/header";
import {Footer} from "../footer/footer";
import {Copywrite} from "../footer/copyright";
import { LoginForms } from "../forms/loginForms";

function Login() {
    return (
        <>
            <Header />
            <div className='container-fluid' style={{background:'#F6F6F6'}}>
                <div className='container'>
                    <div className='row'>
                        <div 
                            className='col-xl-3 offset-xl-4 shadow mt-5 my-5 p-5'
                            style={{background:'white'}}
                        >
                            <LoginForms />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Copywrite />
        </>
    )
}

export default Login;
