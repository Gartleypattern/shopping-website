export const SideImage = ({src, title, text}) =>{
    return(
        <div>
            <div className='d-flex mt-5'>
                    <img src={src} style={{width:'180px',height:'180px'}} alt='' />
                    <div className='d-flex flex-column mt-5' style={{marginRight:'100px'}}>
                        <h5 className='text-success' style={{fontWeight:'bold'}}>{title}</h5>
                        <p className='mt-2'>{text}</p>
                    </div>
                </div>
        </div>
    );
};