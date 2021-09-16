export const LoginForms = ()=>(
    <div>
        <label htmlFor ='userName'>نام کاربری یا آدرس ایمیل</label>
        <input className='form-control mt-2' type='text' name='userName' id='userName' />
        <label className='mt-3' htmlFor ='pass'>گذرواژه</label>
        <input className='form-control mt-2' type='password' name='pass' id='pass' />
        <div className='form-check mt-3'>
            <label className='form-check-label' htmlFor ='reminder'>مرا به خاطر بسپار</label>
            <input className='form-check-input' id='reminder' type='checkbox'/>
        </div>
    </div>
);