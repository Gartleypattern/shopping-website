
function ProductForm() {
    return (
        <>
            <form className='form-group mt-5'>
                <label htmlFor ='yourComment'>دیدگاه شما</label>
                <input type='text' id='yourComment' name='yourComment' className='form-control' />
                <div className='d-flex mt-3'>
                    <div className='mt-3' style={{width:'50%'}}>
                        <label htmlFor ='name'>نام</label>
                        <input type='text' id='name' name='name' className='form-control' />
                    </div>
                    <div className='mt-3' style={{width:'50%', marginRight:'10px'}}>
                        <label htmlFor ='email'>ایمیل</label>
                        <input type='email' id='email' name='email' className='form-control' />
                    </div>
                </div>
                <button className='btn-lg btn-success text-light mt-4'>ثبت</button>
            </form>
        </>
    )
}

export default ProductForm
