import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Copywrite} from '../footer/copyright';
import { RightDivider } from '../diveder/rightDivider';
import {ProductSummary} from '../box/productSummary';
import { ProductCommnet } from '../box/productCommnet';
import ProductForm from '../forms/productForm';

export const PopupMarketingMovie = () =>(
    <>
        <Header/>
        <div className='container-fluid' style={{background:'#F6F6F6'}}>
           <ProductSummary 
                title='فیلم پاپ آپ مارکتینگ'
                priceTitle= '32000 هزار تومان'
                p1= 'تهیه کننده : ژان بقوسیان'
                p3= 'فرمت فیلم : MP4 دانلودی'
                src='img/PopupMarketingWebinar.jpg'
           />
        </div> 
            <div className='mb-3'>
                <div className='row px-2'>
                    <div className='col-xl-10 offset-xl-1'>
                        <h3 className='mt-4' style={{fontWeight:'bold'}}>توضیحات</h3>
                            <RightDivider 
                                width='60px'
                                color='gray'
                            />
                        <div className='text-center text-success'>
                            <h3 style={{fontWeight:'bold'}}>فیلم پاپ آپ مارکتینگ</h3>
                            <h5 style={{fontWeight:'bold'}}>بررسی تاثیر فیلم در مارکتینگ</h5>
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
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{background:'#F6F6F6',height:'30px'}}></div>
        <Footer/>
        <Copywrite/>
    </>
);