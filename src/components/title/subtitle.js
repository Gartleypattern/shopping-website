export const SubTitle = ({title, size, color})=>{
    return(
        <div>
            <h5 className={`main-title text-center text-${color} mt-3`} style={{fontSize:`${size}`}}>
                {title}
            </h5>
        </div>
    );
};