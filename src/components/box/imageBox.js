import { CenterDivider } from "../diveder/centerDivider";
import { Badge } from "../badges/badge";
import { NavLink } from "react-router-dom";

export const ImageBox=({title, body, ImageSrc,
     badge, badgeDate, badgeMonth, divider, top, right, target})=>{
    return(
            <div className="col-sm-12 col-lg-3 text-center position-relative">
                <NavLink to= {`${target}`} className='text-decoration-none text-dark'>
                    <div className='img-box py-2'>
                        <img 
                            src={ImageSrc} 
                            style={{width:'100%',borderRadius:'7px 7px 0px 0px'}} 
                            alt='' 
                        />
                        {badge && <Badge badgeDate = {badgeDate} badgeMonth = {badgeMonth} top={top} right={right} />}
                            <div className='px-3 py-2 shadow rounded'>
                                <h5 className='pt-3'>{title}</h5>
                                {divider && <CenterDivider width='60px' color='gray' />}
                                <p>{body}</p>
                            </div>
                    </div>
                </NavLink>
            </div>
    );
};