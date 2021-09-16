import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Copywrite} from '../footer/copyright';
import { RightDivider } from '../diveder/rightDivider';
import {ProductSummary} from '../box/productSummary';
import { ProductCommnet } from '../box/productCommnet';

export const WebinarChecklist = () =>(
    <>
        <Header/>
        <div className='container-fluid' style={{background:'#F6F6F6'}}>
           <ProductSummary 
                title='چک لیست وبینار'
                priceTitle= '78000 هزار تومان'
                p1= 'تهیه کننده : ژان بقوسیان'
                p3= 'فرمت فیلم : MP4 دانلودی'
                src='img/WebinarChecklis.jpg'
           />
        </div> 
            <div className='mb-3' style={{background:'white',padding:'30px 120px'}}>
                <h3 className='mt-4' style={{fontWeight:'bold'}}>توضیحات</h3>
                    <RightDivider 
                        width='60px'
                        color='gray'
                    />
                <div className='text-center text-success'>
                    <h3 style={{fontWeight:'bold'}}>چک لیست وبینار</h3>
                    <h5 style={{fontWeight:'bold'}}> مراحل برگزاری یک وبینار</h5>
                </div>
                <div className='mt-5' style={{fontWeight:'400', fontSize:'1.1em'}}>
                    <p>این کتاب برای کارآفرینان و مدیران نوشته شده است؛ افرادی که به‌نظر من در جامعه بسیار ارزشمند هستند. این گروه هر روز با مشکلات و چالش‌های جدیدی مواجه می‌شوند.</p>
                    <p>با بزرگ‌تر شدن کسب‌وکار، پیچیدگی‌ها بیشتر می‌شود. پس از مدتی می‌بینیم که غرق فعالیت‌های زیادی شده‌ایم. تعداد کارهایی که باید انجام بدهیم آن‌قدر زیاد است که انجام همه آن‌ها امکان‌پذیر نیست و باید تصمیم بگیریم کدام موارد اولویت دارند.</p>
                    <p>این کتاب به شما کمک می‌کند دیدگاهی ساده و سیستمی به کسب‌وکارتان داشته باشید و اولویت‌های درست، برای رشد کارتان را تشخیص بدهید.</p>
                </div>
                <div className='mt-5' style={{fontWeight:'400', fontSize:'1.1em'}}>
                    <h4 className='text-success' style={{fontWeight:'bold'}}>این کتاب متفاوت است</h4>
                    <p>این کتاب برای کارآفرینان و مدیران نوشته شده است؛ افرادی که به‌نظر من در جامعه بسیار ارزشمند هستند. این گروه هر روز با مشکلات و چالش‌های جدیدی مواجه می‌شوند.</p>
                    <p>با بزرگ‌تر شدن کسب‌وکار، پیچیدگی‌ها بیشتر می‌شود. پس از مدتی می‌بینیم که غرق فعالیت‌های زیادی شده‌ایم. تعداد کارهایی که باید انجام بدهیم آن‌قدر زیاد است که انجام همه آن‌ها امکان‌پذیر نیست و باید تصمیم بگیریم کدام موارد اولویت دارند.</p>
                    <p>این کتاب به شما کمک می‌کند دیدگاهی ساده و سیستمی به کسب‌وکارتان داشته باشید و اولویت‌های درست، برای رشد کارتان را تشخیص بدهید.</p>
                </div>
                <h3 className='mt-5' style={{fontWeight:'bold'}}>نظرات(45)</h3>
                <RightDivider 
                    width='120px'
                    color='gray'
                />
                <h4 className='text-success mt-5'>45 دیدگاه برای این محصول موجود است</h4>
                <ProductCommnet 
                    hostSrc= 'img/profile_photo.jpg'
                    hostName= 'علی احمدی'
                    p1= 'با سلام و احترام'
                    p2= 'کتاب بسیار خوبی بود'
                    p3= 'با تشکر'
                    userSrc= 'img/profile_photo.jpg'
                    p4= 'سلام'
                    p5= 'با تشکر از اعتماد شما'
                />
                <ProductCommnet 
                    hostSrc= 'img/profile_photo.jpg'
                    hostName= 'رضا سالاری'
                    p1= 'با سلام و احترام'
                    p2= 'کتاب بسیار خوبی بود'
                    p3= 'با تشکر'
                    userSrc= 'img/profile_photo.jpg'
                    p4= 'سلام'
                    p5= 'با تشکر از اعتماد شما'
                />
                
                <div className='mt-5 p-5' style={{border:'1px solid black'}}>
                    <h4 className='text-success' style={{fontWeight:'bold'}}>دیدگاه خود را بنویسید</h4>
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
                </div>
            </div>
            <div className='container-fluid' style={{background:'#F6F6F6',height:'30px'}}></div>
        <Footer/>
        <Copywrite/>
    </>
);