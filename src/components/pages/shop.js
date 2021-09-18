import {Header} from '../header/header';
import{Footer} from '../footer/footer';
import {Copywrite} from '../footer/copyright';
import { Sidebar } from '../sidebar/sidebar';
import { MainTitle } from '../title/mainTitle';
import { CenterDivider } from '../diveder/centerDivider';
import { PriceBox } from '../box/priceBox';
import { BreadCrump } from '../breasCrump/breadCrump';

export const Shop= () => {
    return(
        <div>
            <Header />
            <div className='container-fluid pb-5' style={{background:'#F6F6F6'}}>
                <div className='container pt-5'>
                    <BreadCrump 
                        title='فروشگاه'
                    />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 bg-light shadow px-5 py-4' 
                            style={{maxHeight:'500px', marginTop:'130px'}}>
                            <Sidebar />
                        </div>
                        <div className='col-9'>
                            <MainTitle
                                color='dark'
                                title=' محصولات' 
                            /> 
                            <CenterDivider 
                                width='40px'
                                color='gray'
                            />
                            <div className='d-flex justify-content-around mt-4'>
                                <PriceBox 
                                    src='img/KasbokarHaminAst.jpg'
                                    title='کتاب کسب و کار همین است!'
                                    price='200,000  تومان'
                                    target='کتاب کسب و کار همین است'
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
                            </div>
                            <div className='d-flex justify-content-around mt-4'>
                                <PriceBox 
                                    src='img/MMI3.jpg'
                                    title='فیلم تولید سریع محتوا'
                                    price='199,000  تومان'
                                    target='تولید سریع محتوا'
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
                            </div>
                            <div className='d-flex justify-content-around mt-4'>
                                <PriceBox 
                                    src='img/product.jpg'
                                    title='دوره آنلاین بازسازی کسب و کار'
                                    price='3,950,000  تومان'
                                    target='بازسازی کسب و کار'
                                />
                                <PriceBox 
                                    src='img/ArticleWritingChecklist.jpg'
                                    title='چک لیست مقاله '
                                    price='99,000  تومان'
                                    target='چک لیست مقاله'
                                />
                                <PriceBox 
                                    src='img/Estekhdam.jpg'
                                    title='کتاب استخدام و استخراج'
                                    price='19000 تومان -39000 تومان'
                                    target='چک لیست مقاله'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Copywrite />
        </div>
    );
};