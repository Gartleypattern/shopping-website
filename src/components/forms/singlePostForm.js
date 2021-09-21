const SinglePostForm = () =>(
    <>
        <form className='form-group' style={{margin:'0px auto', width:'90%'}}>
            <label className='mb-2' for='note' style={{fontWeight:'bold'}}>دیدگاه</label>
            <textarea 
                id='note'
                className='form-control' 
                rows='5'
            >
            </textarea>
            <div className='row mt-3'>
                <div className='col' >
                    <label className='mb-2' for='lName' style={{fontWeight:'bold'}} >نام</label>
                    <input className='form-control' id='lName' type='text' name='lName' />
                </div>
                <div className='col' >
                    <label className='mb-2' for='fName' style={{fontWeight:'bold'}}>ایمیل</label>
                    <input className='form-control' id='fName' type='email' name='email' />
                </div>
            </div>
            <div className='form-group mt-4'>
                <select className='form-control'>
                    <option className='selected'>فقط دریافت پاسخ دیدگاه های خودم</option>
                    <option>مشترک نمی شوم</option>
                    <option>دریافت همه دیدگاه های این نوشته</option>
                    <option>فقط دریافت دیدگاه های پاسخ خودم</option>
                </select>
            </div>
            <p className='mt-3' style={{fontWeight:'bold'}}>من را با ایمیل از دیدگاه های آتی این نوشته مطلع کنید. همچنین می توانید بدون ارسال دیدگاه مشترک شوید</p>
            <button className='btn-lg btn-success'>فرستادن دیدگاه</button>
        </form>
    </>
);

export default SinglePostForm;