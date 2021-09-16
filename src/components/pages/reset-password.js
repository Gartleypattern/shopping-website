import { Header } from "../header/header";

export const resetPassword =()=>(
    <div>
        <Header />
        <div className='container-fluid text-center py-4' style={{background:'#F7F7F7'}}>
            <button className='btn-lg btn-danger'>G ورود با گوگل</button>
        </div>
        <div className='containver-fluid' style={{background:'#F1F1F1', padding:'50px 20px'}}>
            <div className='container' style={{padding:'0px 20px'}}>
                <div style={{background:'white',padding:'70px 20px 100px 20px'}}>
                    <p>
                        گذرواژه خود را فراموش کرده اید؟ نام کاربری یا ایمیل خود را وارد کنید. یک لینک برای ساختن رمز جدید در ایمیل خود دریافت خواهید کرد
                    </p>
                    <label htmlFor='userName'>نام کاربری یا ایمیل</label>
                    <input className='form-control mt-3' 
                            type='text' 
                            name='userName' 
                            id='userName' 
                            style={{width:'50%'}}
                    />
                    <button className='btn-lg btn-success mt-3'>بازگردانی گذرواژه</button>
                </div>
            </div>
        </div>
    </div>
);