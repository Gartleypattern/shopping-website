import { NavLink } from "react-router-dom";

export const BreadCrump = (props)=>{
    return(
        <div style={{fontSize:'25px'}}>
            <NavLink  
                className='text-decoration-none' 
                to='/'>خانه
        </NavLink>/<span>{props.title}</span>
        </div>
    );
};