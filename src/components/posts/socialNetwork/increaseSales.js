import { Copywrite } from "../../footer/copyright";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";
import { CenterDivider } from "../../diveder/centerDivider";
import { Badge } from "../../badges/badge";
import { RightDivider } from "../../diveder/rightDivider";

export const IncreaseSales = ()=>(
    <>
        <Header/>
        <div className='container-fluid' style={{background:'#F4F4F4'}}>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-xl-1'></div>
                    <div className='col-xl-7 position-relative' 
                          style={{marginLeft:'50px'}}
                    >
                        <img 
                            className='single-post-image' 
                            src='img/sales.jpg' 
                            style={{
                                width:'786px',
                                height:'500px',
                                borderRadius:'7px 7px 0px 0px'
                            }} 
                            alt=''
                        />
                        <Badge 
                            badgeDate='5'
                            badgeMonth='تیر'
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
                                <h3 className='text-success' style={{fontWeight:'bold'}}>افزایش فروش</h3>
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
                            <h5 className='text-success text-center mt-5' style={{fontWeight:'bold'}}>این مطالب را هم حتما بخوانید</h5>
                            <CenterDivider 
                                width='30px'
                                color='gray'
                            />
                            <div className='row text-center mt-4'>
                                <div className='col-xl-3'>
                                    <img 
                                        src='img/Instagram-featured.jpg' 
                                        style={{width:'161px', height:'90px'}} 
                                        className='rounded'
                                        alt=''
                                    />
                                    <h6 style={{fontWeight:'bold', marginTop:'10px'}}>روش استفاده از اینستاگرام</h6>
                                </div>
                                <div className='col-xl-3'>
                                    <img 
                                        src='img/SevenStrategyQuestions-featured.jpg' 
                                        style={{width:'161px', height:'90px'}} 
                                        className='rounded'
                                        alt=''
                                    />
                                    <h6 style={{fontWeight:'bold', marginTop:'10px'}}>خلاصه کتاب 7 سوال درباره استراتژی</h6>
                                </div>
                                <div className='col-xl-3'>
                                    <img 
                                        src='img/Products-featured.jpg' 
                                        style={{width:'161px', height:'90px'}} 
                                        className='rounded'
                                        alt=''
                                    />
                                    <h6 style={{fontWeight:'bold', marginTop:'10px'}}>خلاصه کتاب 7 سوال درباره استراتژی</h6>
                                </div>
                                <div className='col-xl-3'>
                                    <img 
                                        src='img/SeoSkill-featured.jpg' 
                                        style={{width:'161px', height:'90px'}} 
                                        className='rounded'
                                        alt=''
                                    />
                                    <h6 style={{fontWeight:'bold', marginTop:'10px'}}>خلاصه کتاب 7 سوال درباره استراتژی</h6>
                                </div>
                            </div>
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
                        <h5 className='mt-3' style={{fontWeight:'bold'}}>این مطلب را هم بخوانید</h5>
                        <RightDivider 
                            width='30px'
                        />
                        <img 
                            className='mt-4'
                            src='img/ads.jpg' 
                            style={{width:'300px', height:'170px'}} 
                            alt=''
                        />
                        <h5 className='mt-3'>تولید سریع محتوا</h5>
                        <img 
                            className='mt-3' 
                            src='img/ContentMarketingTips.jpg' 
                            style={{width:'300px', height:'170px'}} 
                            alt=''
                        />
                        <h5 className='mt-4'>هشت نکته مهم درباره بازاریابی محتوا</h5>
                        <img 
                            className='mt-3' 
                            src='img/InstagraMarketing.jpg' 
                            style={{width:'300px', height:'170px'}} 
                            alt=''
                        />
                        <h5 className='mt-4'>11 روند مهم بازاریابی اینستاگرام</h5>
                        <img 
                            className='mt-3' 
                            src='img/PresentationTips.jpg' 
                            style={{width:'300px', height:'170px'}} 
                            alt=''
                        />
                        <h5 className='mt-4'>نکاتی درباره سخنرانی خوب</h5>
                        <img 
                            className='mt-3' 
                            src='img/Rework-book-summary.jpg' 
                            style={{width:'300px', height:'170px'}} 
                            alt=''
                        />
                        <h5 className='mt-4'>6 دیدگاه دور ریختنی درباره کسب و کار</h5>
                    </div>
                    <div className='col-xl-1'></div>
                </div>
            </div>
        </div>
        <Footer />
        <Copywrite />
    </>
);