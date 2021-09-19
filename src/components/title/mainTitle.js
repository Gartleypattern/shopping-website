export const MainTitle = ({title, color, size}) => {
    return(
        <h3 className={`main-title text-center text-${color} mt-5 text-decoration-none`} 
            style={{fontWeight:'bold', fontSize:`${size}`}}
        >
            {title}
        </h3>
    );
};