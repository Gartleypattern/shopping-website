export const SideImage = ({src, title, text}) =>{
    return(
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-xl-2 side-img'>
                    <img src={src} style={{width:'180px',height:'180px'}} alt='' />
                </div>
                <div className='col-xl-10 mt-5'>
                    <h5 className='text-success' style={{fontWeight:'bold'}}>{title}</h5>
                    <p className='mt-2'>{text}</p>
                </div>
            </div>
        </div>
    );
};