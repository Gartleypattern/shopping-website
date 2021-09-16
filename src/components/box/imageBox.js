import { CenterDivider } from "../diveder/centerDivider";
import { Badge } from "../badges/badge";
import { NavLink } from "react-router-dom";

export const ImageBox=({title, body, ImageSrc,
     badge, badgeDate, badgeMonth, divider, top, right, target})=>{
    return(
        <NavLink to= {`${target}`} className='text-decoration-none text-dark'>
            <div className="container d-flex flex-column text-center position-relative">
                <img 
                    src={ImageSrc} 
                    style={{width:'300px',borderRadius:'7px 7px 0px 0px'}} 
                    alt='' 
                />
                {badge && <Badge badgeDate = {badgeDate} badgeMonth = {badgeMonth} top={top} right={right} />}
                    <div className='bg-light shadow px-3' style={{borderRadius:'0px 0px 7px 7px'}}>
                        <h5 className='mt-3'>{title}</h5>
                        {divider && <CenterDivider width='60px' color='gray' />}
                        <p>{body}</p>
                    </div>
            </div>
        </NavLink>
    );
};