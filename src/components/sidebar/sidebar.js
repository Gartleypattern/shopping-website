import { RightDivider } from "../diveder/rightDivider";

export const Sidebar=()=>{
    return(
        <div>
            <h5 style={{fontWeight:'bold'}}>فروش آموزش</h5>
                <RightDivider 
                    width='30px'
                />
                <ul className='mt-2'>
                    <li className='mt-2'>بهبود فردی</li>
                    <li className='mt-2'>دیجیتال مارکتینگ</li>
                    <li className='mt-2'>رشد کسب و کار</li>
                    <li className='mt-2'>صنعت آموزش</li>
                </ul>
                <h5 className='mt-4' style={{fontWeight:'bold'}}>فرمت محصولات </h5>
                <RightDivider 
                    width='30px'
                />
                <ul className='mt-2'>
                    <li className='mt-2'> بسته آموزشی</li>
                    <li className='mt-2'>فیلم دانلودی</li>
                    <li className='mt-2'>کتاب الکترونیکی</li>
                    <li className='mt-2'>کتاب چاپی و صوتی</li>
                </ul>
        </div>
    );
}