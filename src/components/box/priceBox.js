import { NavLink } from "react-router-dom";

export const PriceBox= ({title, price, src, target})=>{
    return(
            <div className='text-box col-sm-12 col-lg-3 text-center rounded' style={{borderRadius:'7px'}}>
                <NavLink to={`${target}`} className='text-decoration-none text-dark' >
                        <img 
                            src={src} 
                            alt='' 
                            style={{borderRadius:'7px 7px 0px 0px',width:'100%', height:'300px'}} 
                        />
                        <div className='py-3 bg-light shadow' style={{borderRadius:'0px 0px 7px 7px'}}>
                            <h6>{title}</h6>
                            <p className='mt-4' style={{fontWeight:'bold'}}>{price}</p>
                        </div>
                </NavLink>
            </div>
    );
};