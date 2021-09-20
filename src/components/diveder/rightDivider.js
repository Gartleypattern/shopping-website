export const RightDivider = ({width, display})=>{
    return(
        <div 
            className={`main-slide mt-3 ${display}`} 
            style={{width:`${width}`, 
            height:'3px', 
            background:'#E5E5E5'
            }}
        >

        </div>
    );
};