import { RightDivider } from "../diveder/rightDivider";

export const Footer= ()=>{
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                   <h5 style={{fontWeight:'bold'}}>نماداعتماد الکترونیکی</h5>
                   <RightDivider width='50px' />
                   <img className='mt-3' src='img/namad.png' alt='' />
                </div>
                <div className='col'>
                    <h5 style={{fontWeight:'bold'}}> چند آموزش  کلیدی </h5>
                    <RightDivider width='50px' />
                    <ul className='mt-4'>
                        <li className='list-unstyled'>دیجیتال مارکتینگ</li>
                        <li className='list-unstyled'>ایمیل مارکتینگ</li>
                        <li className='list-unstyled'>تبلیغ نویسی</li>
                        <li className='list-unstyled'>رازهای موفقیت</li>
                        <li className='list-unstyled'>افزایش رتبه سایت</li>
                    </ul>
                </div>
                <div className='col'>
                    <h5 style={{fontWeight:'bold'}}>پرفروش ترین محصولات</h5>
                    <RightDivider width='50px' />
                        <div className='d-flex mt-3'>
                            <img src='img/ModaresMarja.jpg' style={{maxWidth:'80px', maxHeight:'80px'}} alt='' />
                            <div className='d-flex flex-column mt-2' style={{marginRight:'10px'}}>
                                <p>کتاب مدرس مرجع</p>
                                <p>29000 تومان</p>
                            </div>
                        </div>
                    <hr/>
                        <div className='d-flex'>
                            <img src='img/AfzayeshAmalkard.jpg' style={{maxWidth:'80px', maxHeight:'80px'}} alt='' />
                            <div className='d-flex flex-column mt-2' style={{marginRight:'10px'}}>
                               <p>کتاب افزایش عملکرد</p>
                               <p>45000 هزار تومان</p>
                            </div>
                    <hr/>
                        </div>
                </div>

                <div className='col' style={{marginLeft:'20px'}}>
                    <h5 style={{fontWeight:'bold'}}>آشنایی با مجموعه آنلاین</h5>
                    <RightDivider width='50px' />
                    <h6 className='mt-3'>سایت آنلاین با
                     20 سال سابقه به شما کمک می کند تا
                      آن را کسب و کارتان را راه اندازی کنید
                      .و رشد دهید
                    </h6>
                </div>
            </div>
        </div>
    );
};