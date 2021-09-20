import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {Copywrite} from '../footer/copyright';
import { MainTitle } from '../title/mainTitle';
import { SubTitle } from '../title/subtitle';
import {RightDivider} from '../diveder/rightDivider';
import {SideImage} from '../box/sideImage';


export const About= ()=> {
    return(
        <div>
            <Header />
            <div className='container-fluid bg-dark' 
                style={{backgroundImage:'url(img/about.jpg)'}}
            >
                <div style={{paddingTop:'150px', paddingBottom:'150px'}}>
                   <MainTitle 
                    title= 'وب سایت آنلاین'
                    color= 'light'
                    size= '2em'
                   /> 
                   <SubTitle 
                    title= 'وب سایت آنلاین به شما کمک می کند تا کسب و کار خود را توسعه دهید'
                    size= '1.5em'
                    color= 'light'
                   />
                </div>
            </div>
            <div className='container mt-5'>
                <p style={{fontSize:'20px'}}>یکی از مهم‌ترین عواملی که باعث می‌شود شرکت‌ها رشد نکنند، آن است که بر بازاریابی و فروش به‌طور موثر کار نمی‌شود. ما به چند روش به شما کمک می‌کنیم:</p>
                <h5 className='mt-5' style={{fontWeight:'bold'}}>خدمات وب سایت آنلاین</h5>
                <RightDivider 
                    width='60px'
                />
                <SideImage 
                    src= 'img/bluray.png'
                    title= 'ارائه محصولات آموزشی برای کسب و کار ها'
                    text= 'ما جدیدترین علم روز را در اختیار شما قرار خواهیم داد'
                />
                <hr/>
                <SideImage 
                    src= 'img/presentation.png'
                    title= 'برگزاری دوره‌های آموزشی در زمینه بازاریابی اینترنتی، بازاریابی، فروش، مدیریت، تبلیغ‌نویسی، تولید محتوا، بهبود عملکرد شخصی و …'
                />
                <hr/>
                <SideImage 
                    src= 'img/computer-graphic.png'
                    title= 'طراحی سایت'
                    text= 'یکی از خدمات ما طراحی سایت است'
                />
                <hr/>
                <div className='mb-3'>
                    <SideImage 
                        src= 'img/computer-graphic.png'
                        title= 'طراحی اپلیکیشن'
                        text= 'یکی از خدمات ما طراحی اپلیکیشن است'
                    />
                </div>
            </div>

            <div className='container-fluid' style={{background:'#FAFAFA'}}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 text-center' style={{margin:'80px 0px'}}>
                            <img src='img/phone.png' style={{width:'80px'}} alt='' />
                            <div className='mt-4' style={{textAlign:'justify',lineHeight:'1'}}>
                                <p>لطفا در صورت داشتن هرگونه پیشنهاد همکاری با ما تماس بگیرید. ما می‌دانیم که همواره در راه</p>
                                <p>پیشرفت به کمک دیگران نیاز داریم و هیچ‌گاه تمامی ایده‌های خوب به ذهن ما نمی‌رسد.</p>
                                <p> برخی از ایده‌های کنونی وب‌سایت مدیر سبز، نتیجه اعمال نظرات بازدیدکنندگان بوده است.</p>
                            </div>
                        </div>
                        <div className='col-xl-6 text-center' style={{margin:'80px 0px', borderRight:'1px solid #F1F1F1'}}>
                            <p>اگر پیشنهادی دارید، با ما تماس بگیرید.</p>
                            <div style={{lineHeight:'1'}}>
                                <p className='mt-5'><strong>ایمیل : </strong>iman@yahoo.com</p>
                                <p><strong>شماره تماس با آنلاین : </strong>22222222-021</p>
                                <p><strong>شماره فکس   : </strong>55555555-021</p>
                            </div>
                            <p className='mt-3' style={{fontWeight:'bold',fontSize:'20px'}}>مدیر و مالک وب سایت آنلاین</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Copywrite />
        </div>
    );
};