export const RegisterForm= ()=>(
    <form className='form-group mt-5' style={{width:'450px'}}>
        <label style={{fontWeight:'bold'}}  htmlFor ='fName'>نام</label>
        <input className='form-control mt-2' name='fName' id='fName' type='text' />
        <label style={{fontWeight:'bold'}}  htmlFor ='lName' className='mt-3'>نام خانوادگی</label>
        <input className='form-control mt-2' name='lName' id='lName' type='text' />
        <label style={{fontWeight:'bold'}}  htmlFor ='email' className='mt-3'>آدرس ایمیل</label>
        <input className='form-control mt-2' name='email' id='email' type='email' />
        <label style={{fontWeight:'bold'}} htmlFor ='pass' className='mt-3'>رمز عبور</label>
        <input className='form-control mt-2' name='pass' id='pass' type='password' />
        <button className='btn-lg btn-success mt-5' style={{width:'49%'}}>ثبت نام</button>
        <button className='btn-lg btn-secondary mt-5' style={{width:'49%',marginRight:'5px'}}>ورود</button>
        <button className='btn-lg btn-danger mt-5 w-100'>ثبت نام یا ورود با اکانت جی میل G</button>
    </form>
);