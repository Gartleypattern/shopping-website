export const ProductCommnet= ({hostSrc,hostName, p1, p2, p3, userSrc,userName, p4, p5})=>(
    <>
        <div className='row mt-5'>
            <div className='col-1'>
                <img src={hostSrc} style={{borderRadius:'100%',width:'60px'}} alt='' />
            </div>
            <div className='col-11'>
                <img src='img/rating_stars.png' style={{width:'120px'}} alt='' />
                <div style={{lineHeight:'10px'}}>
                    <p style={{fontWeight:'bold', marginRight:'10px'}}>{hostName}</p>
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                </div>
            </div>
        </div>
        <div className='row px-3 mx-5 py-5 mt-4 rounded' style={{background:'#F1F1F1'}}>
            <div className='col-1'>
                <img src={userSrc} style={{borderRadius:'100%',width:'60px'}} alt='' />
            </div>
            <div className='col-11' style={{lineHeight:'12px'}}>
                <p style={{fontWeight:'bold'}}>{userName}</p>
                <p>{p4}</p>
                <p>{p5}</p>
            </div>
        </div>
    </>
);