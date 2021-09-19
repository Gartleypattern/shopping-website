export const CenterDivider = ({width, color,})=>(
        <div 
            className = 'mx-auto mt-4 mb-2' 
            style = {{
                height:'2px', 
                width:`${width}`, 
                background:`${color}`
            }} 
        >
        </div>
    );