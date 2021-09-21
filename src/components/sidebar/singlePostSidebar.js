import { RightDivider } from "../diveder/rightDivider";

const SinglePostSidebar = ()=>(
    <>
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
    </>
);
export default SinglePostSidebar;