
export default function DropdownMenu({iconName, dropmenu, li1, li2, li3,li4, li5}) {
    return (
        <>
            <i 
                className={iconName} 
                style={{fontSize:'12px'}}
            >
            </i>
            <ul 
                className={`position-absolute
                            list-unstyled 
                            list-group
                            list-menu
                            ${dropmenu?'d-block':'d-none'}`
                        }
                style={{
                        top:'155px',
                        right:'210px',
                        padding:'10px 15px 10px 50px',
                        marginTop:'-13px',
                        marginRight:'-15px',
                        width:'250px'
                    }}
            >
                <li className='list-group-item'>{li1}</li>
                <li className='list-group-item'>{li2}</li>
                <li className='list-group-item'>{li3}</li>
            </ul>
        </>
    )
}
