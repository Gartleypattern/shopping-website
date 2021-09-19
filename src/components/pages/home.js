import {Header} from '../header/header';
import {Copywrite} from '../footer/copyright';
import { Footer } from '../footer/footer';
import { MainBanner } from '../Banner/mainBanner';
import { MainTitle } from '../title/mainTitle';
import { TextBox } from '../box/textBox';
import { ImageBox } from '../box/imageBox';
import { SubTitle } from '../title/subtitle';
import { PriceBox } from '../box/priceBox';
import { CenterDivider } from '../diveder/centerDivider';


export const Home = () =>{
    return(
        <div>
            <Header />
            <MainBanner />
            <MainTitle
                color='success'
                 title='به دنبال یادگیری و پیشرفت در چه زمینه ای هستید؟ ' 
            />
            <CenterDivider width='100px' />
            <div className='container px-5'>
                <div className='row justify-content-md-center justify-content-md-around'>
                    <TextBox 
                        cardTitle='دیجیتال مارکتینگ'
                        cardText='اگر می‌خواهید بازاریابی اینترنتی را به‌صورت حرفه‌ای بیاموزید و در ایمیـل مارکتینگ، تبلیغ‌نویسی، افزایش رتبه سایت، سئو و … حرفه‌ای شوید، ما به شما کمک می‌کنیم.'
                    />
                    <TextBox 
                        cardTitle='رشد کسب و کار'
                        cardText='اگر مدیر یا کارآفرین هستید، تمام آموزش‌های مدیریت، استخدام و اخراج، انگیزش کارکنان، بازاریابی، تبلیغات، کارآفرینی و سیستم‌سازی در این بخش قرار دارد.'
                    />
                    <TextBox 
                        cardTitle='صنعت آموزش'
                        cardText='اگر مدرس هستید و در کسب‌وکار آموزش هستید، تمام مهارت‌های تولید محتوا، بازاریابی دوره‌ها، ساخت محصولات آموزشی و رشد کسب‌وکار آموزش را به شما نشان می‌دهیم!'
                    />
                </div>
            </div>
            <MainTitle
                color='success'
                title='جدیدترین مقالات' 
            />
            <CenterDivider 
                width='40px'
                color='gray'
            />
            <div className='container mt-5 px-5'>
                <div className='row justify-content-md-center justify-content-md-around'>
                    <ImageBox 
                        ImageSrc='img/sales.jpg'
                        title='افزایش فروش'
                        body='فروش برای هر کسب و کاری مهم هست و با افزایش آن کسب و کار رونق زیادی می گیرد.'
                        badge
                        badgeDate='12'
                        badgeMonth='شهریور'
                        divider
                        top='20px'
                        right='20px'
                        target='/افزایش فروش'
                    />
                    <ImageBox 
                        ImageSrc='img/startBusines.jpg'
                        title=' راه اندازی کسب و کار'
                        body='  کسب و کار نیاز به انجام مراحل مختلفی دارد که در این مقاله به تعدادی از آنها پرداخته ایم'
                        badge
                        badgeDate='5'
                        badgeMonth='اردیبهشت'
                        divider
                        top='20px'
                        right='20px'
                        target='/راه اندازی کسب و کار'
                    />
                    <ImageBox 
                        ImageSrc='img/seo.jpg'
                        title='رتبه بالا در گوگل'
                        body='رتبه بالا در جستجوی گوگل کمک زیادی به دیده شدن کسب و کار ما میکند و می تواند فروش را'
                        badge
                        badgeDate='3'
                        badgeMonth='خرداد'
                        divider
                        top='20px'
                        right='20px'
                        target='/رتبه بالا در گوگل'
                    />
                    <ImageBox 
                        ImageSrc='img/success.jpg'
                        title='پنج راز موفقیت'
                        body='رسیدن به موفقیت رازهای فراوانی دارد اما با دانستن این پنج راز رسیدن به موفقیت قطعی '
                        badge
                        badgeDate='22'
                        badgeMonth='اسفند'
                        divider
                        top='20px'
                        right='20px'
                        target='/پنچ راز موفقیت'
                    />
                </div>
            </div>
            <div className='py-4 mt-5' style={{backgroundColor:'#F1F1F1'}}>
                <MainTitle
                    color='success'
                    title='جدیدترین محصولات' 
                /> 
                <SubTitle
                    title='جدیدترین محصولات آموزشی در این قسمت قرار دارد'
                />
                <CenterDivider width='100px' />
                <div className='container mt-5 px-5'>
                    <div className='row'>
                        <PriceBox 
                            src='img/KasbokarHaminAst.jpg'
                            title='کتاب کسب و کار همین است!'
                            price='200,000  تومان'
                            target='/کتاب کسب و کار همین است'
                        />
                        <PriceBox 
                            src='img/PopupMarketingWebinar.jpg'
                            title='فیلم پاپ آپ مارکتینگ'
                            price='229,000  تومان'
                            target='فیلم پاپ آپ مارکتینگ'
                        />
                        <PriceBox 
                            src='img/webina_QM.jpg'
                            title='فیلم کوئیز مارکتینگ'
                            price='299,000  تومان'
                            target='فیلم کوئیز مارکتینگ'
                        />
                        <PriceBox 
                            src='img/product.jpg'
                            title='دوره آنلاین بازسازی کسب و کار'
                            price='3,950,000  تومان'
                            target='/بازسازی کسب و کار'
                        />
                    </div>
                </div>
                <div className='container mt-5 px-5'>
                    <div className='row'>
                        <PriceBox 
                            src='img/MMI3.jpg'
                            title='فیلم تولید سریع محتوا'
                            price='199,000  تومان'
                            target='/تولید سریع محتوا'
                        />
                        <PriceBox 
                            src='img/HMMI3.jpg'
                            title='فیلم سومین همایش مدرسان مرجع'
                            price='299,000  تومان'
                            target='فیلم سومین همایش مدرسان مرجع'
                        />
                        <PriceBox 
                            src='img/WebinarChecklist.jpg'
                            title='چک لیست وبینار'
                            price='99,000  تومان'
                            target='چک لیست وبینار'
                        />
                        <PriceBox 
                            src='img/ArticleWritingChecklist.jpg'
                            title='چک لیست مقاله '
                            price='99,000  تومان'
                            target='چک لیست مقاله'
                        />
                    </div>
            </div>
            </div>
            <Footer />
            <Copywrite />
        </div>
    );
};