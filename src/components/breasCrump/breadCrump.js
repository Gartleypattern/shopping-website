import { NavLink } from "react-router-dom";

export const BreadCrump = ({title, dilplay})=>{
    return(
        <div className={`${dilplay}`} style={{fontSize:'25px'}}>
            <NavLink  
                className='text-decoration-none' 
                to='/'>خانه
        </NavLink>/<span>{title}</span>
        </div>
    );
};