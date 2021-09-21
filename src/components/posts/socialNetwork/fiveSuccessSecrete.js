import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";
import { Copywrite } from "../../footer/copyright";
import { CenterDivider } from "../../diveder/centerDivider";
import { Badge } from "../../badges/badge";
import RelatedPosts from "../../box/relatedPosts";
import SinglePostForm from "../../forms/singlePostForm";
import SinglePostSidebar from "../../sidebar/singlePostSidebar";

export const FiveSuccessSecrete = ()=>(
    <>
        <Header/>
        <div className='container-fluid' style={{background:'#F4F4F4'}}>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-xl-7 offset-xl-1 position-relative' 
                          style={{marginLeft:'50px'}}
                    >
                        <img 
                            className='single-post-image' 
                            src='img/success.jpg' 
                            style={{
                                width:'786px',
                                height:'500px',
                                borderRadius:'7px 7px 0px 0px'
                            }} 
                            alt=''
                        />
                        <Badge 
                            badgeDate='6'
                            badgeMonth='خرداد'
                            top='20px'
                            right='20px'
                        />
                        <div className='px-4 pb-5 post-single-text' 
                             style={{
                                 background:'white',
                                 width:'785px',
                                 borderRadius:'0px 0px 7px 7px'
                                
                                }}
                        >
                            <div className='pt-5' style={{textAlign:'center'}}>
                                <p>فروش</p>
                                <h3 className='text-success' style={{fontWeight:'bold'}}>پنج راز موفقیت</h3>
                                <CenterDivider 
                                    width='50px'
                                        color='gray'
                                />
                                <p>زمان مطالعه : 4 دقیقه</p>
                                <img 
                                    src='img/rating_stars.png' 
                                    style={{width:'180px', marginTop:'-30px'}} 
                                    alt=''
                                />
                            </div>
                            <h5 className='text-success' style={{fontWeight:'bold'}}>1.اعتماد و تفاهم</h5>
                            <p className='text-justify'>دکمه Power روی Transmitter یا فرستنده این دستگاه که در پک آن دو فرستنده وجود دارد، قابل‌برنامه‌ریزی است و توسط نرم‌افزار Rode Central، می‌توانید تعریف کنید که هنگام رکورد فیلم یا هنگام ضبط صدا با زدن آن میکروفنتان را Mute کنید.
                                می‌توانید در تنظیمات Rode Central، تعریف کنید که با زدن این دکمه اصطلاحا یک Marker به فایل صوتی اضافه شود. منظور از Marker خطوط عمودی است که بعد می‌توانید در ادیت صوت به‌راحتی آن نقاط را شناسایی کنید. فرض کنید تنظیم را روی گزینه Marker گذاشته‌ایم، اگر چیزی اشتباه شد می‌توانیم با زدن آن دکمه یک Marker روی صوت بیندازیم و بعد هنگام ادیت صوت کار ساده‌تر است.
                                اگر در سالن‌های همایش سخنرانی می‌کنید، ترجیحا تنظیم آن را روی گزینه Mute می‌گذاریم، که با زدن آن یک لحظه صدا Mute می‌شود و وقتی می‌خواهیم روی سِن مشکلی را حل کنیم، صدا به حضار منتقل نشود.</p>
                            <h5 className='text-success' style={{fontWeight:'bold'}}>2.چرخه فروش رسمی</h5>
                            <p className='text-justify'>Transmitter یا میکروفن‌های مدل Rode، خودشان ویس رکوردر هم هستند و صدا را رکورد می‌کنند؛ ولی چیزی که نمی‌دانستید، این ویس‌رکوردر پر نمی‌شود. در واقع وقتی خود
                                این نرم‌افزار تشخیص
                                داد فضایی برای رکورد ادامه صوت ندارد، قدیمی‌ترین فایل صوتی را به‌صورت خودکار از Transmitter پاک می‌کند. شما بدون اینکه نگران باشید که همایش یا ویدیویی که تولید کرده‌اید در ویس‌رکوردر درونی ذخیره نشود، اتوماتیک فایل‌های قدیمی‌تر پاک می‌شود و فایل جدید جایگزین می‌شود. بنابراین هیچ‌وقت این مشکل پیش نمی‌آید که ظرفیت داخلی پر است و ادامه سخنرانی یا محتوای آموزشی‌تان رکورد نشود.
                            </p>
                            <h5 className='text-success' style={{fontWeight:'bold'}}>3. افزایش مشتریان خوب</h5>
                            <p className='text-justify'>اگر با همین کابل به یک کامپیوتر یا موبایل دارای ورودی USB type C وصل کنید، صدا به‌صورت دیجیتال به کامپیوتر یا موبایل منتقل می‌شود که کیفیت بسیار بالاتری دارد و کابل باعث افت کیفیت آن نمی‌شود. وقتی با جک 3.5 به یک موبایل یا کامپیوتر وصل می‌کنیم، اطلاعات به‌صورت آنالوگ فرستاده می‌شود که ممکن است با افت کیفیت مواجه شویم، ولی وقتی با این کابل به موبایل وصل می‌کنیم در واقع گیرنده Rode از طرف موبایل یک میکروفن تشخیص داده می‌شود و با بالاترین کیفیت ممکن 
                            می‌توانیم صدا را در موبایل یا کامپیوتر رکورد کنیم.
                            </p>
                            <h5 className='text-success text-center mt-5' style={{fontWeight:'bold'}}>مطالب مرتبط</h5>
                            <CenterDivider 
                                width='30px'
                                color='gray'
                            />
                            <RelatedPosts />
                        </div>
                        <div className='row my-3 p-3 post-single-text' 
                             style={{
                                background:'white',
                                width:'785px',
                                marginRight:'1px',
                                borderRadius:'7px'
                                }}
                        >
                            <div className='col-xl-12'>
                                <h3 className='text-success'>دیدگاهتان را بنویسید</h3>
                                <p>نشانی ایمیل شما منتشر نخواهد شد</p>
                                <SinglePostForm />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 post-single-sidebar' 
                         style={{
                             background:'white',
                              maxHeight:'1300px',
                              borderRadius:'7px'
                            }}
                    >
                        <SinglePostSidebar />
                    </div>
                    <div className='col-xl-1'></div>
                </div>
            </div>
        </div>
        <Footer />
        <Copywrite />
    </>
);