import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Copywrite} from '../footer/copyright';
import { SideImage } from '../box/sideImage';
import { RightDivider } from '../diveder/rightDivider';

export const Contact = () =>{
    return(
        <div>
            <Header />
            <img src='img/map.png' style={{width:'100%', height:'400px'}} alt='' />
            <div className='container' style={{marginTop:'100px'}}>
                <h5 className='mt-5' style={{fontWeight:'bold'}}>روش های تماس با وب سایت سایت آنلاین</h5>
                <RightDivider 
                    width='100px'
                />
                <SideImage 
                    src= 'img/address.png'
                    title= 'آدرس: خیابان ولیعصر – امانیه'
                    text= 'امکان مراجعه حضوری فقط با هماهنگی قبلی وجود دارد'
                />
                <hr/>
                <SideImage 
                    src= 'img/call.png'
                    title= 'تلفن:  ۲۲۶۵۰۴۵۴, ۲۲۶۵۰۴۵۳ ,۲۲۶۵۰۴۵۲'
                    text='ساعات کاری ما شنبه تا چهارشنبه ساعت  ۹ صبح تا ۵ بعد از ظهر است.
                    روزهای پنجشنبه‌، جمعه و تعطیلات رسمی تعطیل هستیم.'
                />
                <hr/>
                <SideImage 
                    src= 'img/sms.png'
                    title= 'سامانه پیامکی: 3000000 '
                    text= 'در خارج ساعات کاری اگر مشکلی در خرید، دانلود داشتید می‌توانید به سامانه پیامک بزنید.'
                />
                <hr/>
                <SideImage 
                    src= 'img/instagram.png'
                    title= 'اینستاگرام: در اینستاگرام modiresabz را جستجو کنید.'
                    text= 'فالو کردن صفحه اینستاگرام  دو مزیت بزرگ دارد'
                    />
                <hr/>
                <div className='mb-3'>
                    <SideImage 
                        src= 'img/telegram.png'
                        title= 'تلگرام: در تلگرام online را جستجو کنید.'
                        text= 'با عضویت در کانال تلگرام آنلاین  از جدیدترین مقالات و آموزش‌های بازاریابی و کسب‌وکار بهره‌مند شوید. همچنین زودتر از دیگران از فروش‌های ویژه مطلع شوید.'
                    />
                </div>
            </div>
            <hr />
            <Footer />
            <Copywrite />
        </div>
    );
};