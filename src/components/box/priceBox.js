import { NavLink } from "react-router-dom";

export const PriceBox= ({title, price, src, target})=>{
    return(
        <NavLink to={`${target}`} className='text-decoration-none text-dark' >
            <div className='d-flex flex-column text-center rounded' style={{borderRadius:'7px'}}>
                <img 
                    src={src} 
                    alt='' 
                    style={{borderRadius:'7px 7px 0px 0px',width:'300px', height:'300px'}} 
                />
                <div className='bg-light shadow' style={{borderRadius:'0px 0px 7px 7px'}}>
                    <h6 className='mt-3'>{title}</h6>
                    <p className='mt-4' style={{fontWeight:'bold'}}>{price}</p>
                </div>
            </div>
        </NavLink>
    );
};