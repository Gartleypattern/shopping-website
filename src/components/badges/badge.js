export const Badge = ({badgeDate, badgeMonth, top, right}) => {
    return(
        <div>
            <span 
                className=' position-absolute bg-light text-center px-3 py-1 rounded'
                style={{top:`${top}`, right:`${right}`}}
            >
                <div className='d-flex flex-column'>
                    <span>{badgeDate}</span>
                    <span>{badgeMonth}</span>
                </div>
            </span>
        </div>
    );
};