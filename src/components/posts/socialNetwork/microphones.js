import { Copywrite } from "../../footer/copyright";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";
import { CenterDivider } from "../../diveder/centerDivider";
import { Badge } from "../../badges/badge";
import { RightDivider } from "../../diveder/rightDivider";

export const Microphones = ()=>(
    <>
        <Header/>
        <div className='container-fluid' style={{background:'#F4F4F4'}}>
            <div className='pt-5' style={{margin:'0px 100px'}}>
                <div className='row'>
                    <div className='col-lg-9 mb-5'>
                        <div className='text-center'>
                            <div className='position-relative' >
                                <img 
                                    className='positin-relative rounded' 
                                    src='img/Rode.jpg' style={{width:'90%'}} 
                                    alt=''
                                />
                            <Badge 
                                badgeDate='5'
                                badgeMonth='تیر'
                                top='20px'
                                right='70px'
                            />
                            </div>
                            <div className='py-3' style={{background:'white', width:'90%', marginRight:'47px'}}>
                                <p>تولید محتوا</p>
                                <h3 className='text-success' style={{fontWeight:'bold'}}>7 نکته در مورد میکروفن‌های Rode Wireless GO II</h3>
                                <CenterDivider 
                                    width='50px'
                                    color='gray'
                                />
                                <p>زمان مطالعه : 3 دقیقه</p>
                                <img 
                                    src='img/rating_stars.png' 
                                    style={{width:'180px', marginTop:'-30px'}} 
                                    alt=''
                                />
                                <div className='px-4' style={{textAlign:'right', fontSize:'18px'}}>
                                    <h5 className='text-success' style={{fontWeight:'bold'}}>1. 1. دارای دکمه Power قابل تنظیم</h5>
                                    <p>دکمه Power روی Transmitter یا فرستنده این دستگاه که در پک آن دو فرستنده وجود دارد، قابل‌برنامه‌ریزی است و توسط نرم‌افزار Rode Central، می‌توانید تعریف کنید که هنگام رکورد فیلم یا هنگام ضبط صدا با زدن آن میکروفنتان را Mute کنید.
                                        می‌توانید در تنظیمات Rode Central، تعریف کنید که با زدن این دکمه اصطلاحا یک Marker به فایل صوتی اضافه شود. منظور از Marker خطوط عمودی است که بعد می‌توانید در ادیت صوت به‌راحتی آن نقاط را شناسایی کنید. فرض کنید تنظیم را روی گزینه Marker گذاشته‌ایم، اگر چیزی اشتباه شد می‌توانیم با زدن آن دکمه یک Marker روی صوت بیندازیم و بعد هنگام ادیت صوت کار ساده‌تر است.
                                        اگر در سالن‌های همایش سخنرانی می‌کنید، ترجیحا تنظیم آن را روی گزینه Mute می‌گذاریم، که با زدن آن یک لحظه صدا Mute می‌شود و وقتی می‌خواهیم روی سِن مشکلی را حل کنیم، صدا به حضار منتقل نشود.</p>
                                    <h5 className='text-success' style={{fontWeight:'bold'}}>2. 2. ضبط صدا در فرستنده (ویس رکوردر)</h5>
                                    <p>Transmitter یا میکروفن‌های مدل Rode، خودشان ویس رکوردر هم هستند و صدا را رکورد می‌کنند؛ ولی چیزی که نمی‌دانستید، این ویس‌رکوردر پر نمی‌شود. در واقع وقتی خود
                                         این نرم‌افزار تشخیص
                                          داد فضایی برای رکورد ادامه صوت ندارد، قدیمی‌ترین فایل صوتی را به‌صورت خودکار از Transmitter پاک می‌کند. شما بدون اینکه نگران باشید که همایش یا ویدیویی که تولید کرده‌اید در ویس‌رکوردر درونی ذخیره نشود، اتوماتیک فایل‌های قدیمی‌تر پاک می‌شود و فایل جدید جایگزین می‌شود. بنابراین هیچ‌وقت این مشکل پیش نمی‌آید که ظرفیت داخلی پر است و ادامه سخنرانی یا محتوای آموزشی‌تان رکورد نشود.
                                    </p>
                                    <h5 className='text-success' style={{fontWeight:'bold'}}>3. ارسال خروجی دیجیتال صدا از طریق پورت USB type C</h5>
                                    <p>اگر با همین کابل به یک کامپیوتر یا موبایل دارای ورودی USB type C وصل کنید، صدا به‌صورت دیجیتال به کامپیوتر یا موبایل منتقل می‌شود که کیفیت بسیار بالاتری دارد و کابل باعث افت کیفیت آن نمی‌شود. وقتی با جک 3.5 به یک موبایل یا کامپیوتر وصل می‌کنیم، اطلاعات به‌صورت آنالوگ فرستاده می‌شود که ممکن است با افت کیفیت مواجه شویم، ولی وقتی با این کابل به موبایل وصل می‌کنیم در واقع گیرنده Rode از طرف موبایل یک میکروفن تشخیص داده می‌شود و با بالاترین کیفیت ممکن 
                                        می‌توانیم صدا را در موبایل یا کامپیوتر رکورد کنیم.
                                    </p>
                                    <div className='text-center mt-5'>
                                        <img 
                                            className='text-center' 
                                            src='img/rating_stars.png' 
                                            style={{width:'250px', marginTop:'-30px'}} 
                                            alt=''
                                        />
                                        <p>میانگین امتیاز : 4.4 /5</p>
                                        <h5 className='text-success mt-5' style={{fontWeight:'bold'}}>این مطالب را هم حتما بخوانید</h5>
                                        <CenterDivider 
                                            width='30px'
                                            color='gray'
                                        />
                                        <div className='d-flex' style={{margin:'20px 70px'}}>
                                            <div>
                                                <img 
                                                    src='img/Instagram-featured.jpg' 
                                                    style={{width:'161px', height:'90px'}} 
                                                    className='rounded'
                                                    alt=''
                                                    />
                                                <h6 style={{fontWeight:'bold', marginTop:'10px'}}>روش استفاده از اینستاگرام</h6>
                                            </div>
                                            <div style={{marginRight:'10px'}}>
                                                <img 
                                                    src='img/SevenStrategyQuestions-featured.jpg' 
                                                    style={{width:'161px', height:'90px'}} 
                                                    className='rounded'
                                                    alt=''
                                                    />
                                                <h6 style={{fontWeight:'bold', marginTop:'10px'}}>خلاصه کتاب 7 سوال درباره استراتژی</h6>
                                            </div>
                                            <div style={{marginRight:'10px'}}>
                                                <img 
                                                    src='img/Products-featured.jpg' 
                                                    style={{width:'161px', height:'90px'}} 
                                                    className='rounded'
                                                    alt=''
                                                    />
                                                <h6 style={{fontWeight:'bold', marginTop:'10px'}}>خلاصه کتاب 7 سوال درباره استراتژی</h6>
                                            </div>
                                            <div style={{marginRight:'10px'}}>
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

                                </div>
                            </div>
                            <div 
                                className='py-5 px-3'
                                style={{background:'white',margin:'30px 48px', textAlignLast:'right'}}
                            >
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
                    <div className='col-lg-3 py-4 rounded' style={{background:'white', height:'50%'}} >
                        <img 
                            src='img/ads.jpg' 
                            style={{width:'300px', height:'300px'}} 
                            alt=''
                        />
                        <h5 className='mt-3' style={{fontWeight:'bold'}}>این مطلب را هم بخوانید</h5>
                        <RightDivider 
                            width='30px'
                        />
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
                </div>
            </div>
        </div>
        <Footer />
        <Copywrite />
    </>
);