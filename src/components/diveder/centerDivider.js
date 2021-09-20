export const CenterDivider = ({width, color, display})=>(
        <div 
            className = {`mx-auto mt-4 mb-2 ${display}`} 
            style = {{
                height:'2px', 
                width:`${width}`, 
                background:`${color}`
            }} 
        >
        </div>
    );