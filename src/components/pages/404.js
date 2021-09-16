import { Copywrite } from "../footer/copyright";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { SearchInput } from "../inputs/searchInput";

export const NotFound = ()=>(
    <>
        <Header />
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-sm-3'>
                    <span style={{fontSize:'10em', fontWeight:'bold', opacity:'.3'}}>404</span>
                </div>
                <div className='col-sm-9 mt-5'>
                    <h3 className='text-success' style={{fontWeight:'bold'}}>اوه! صفحه ای که دنبال آن هستید وجود ندارد.</h3>
                    <p className='mt-3' style={{fontSize:'1.1em'}}>ظاهرا چیزی در این صحفه ای که بازدید کرده اید وجود ندارد.از لینک های زیر یا فرم جستجو استبفاده نمائید</p>
                    <SearchInput 
                        width='80%'
                    />
                </div>
            </div>
        </div>
        <hr/>
        <Footer />
        <Copywrite />
    </>
);