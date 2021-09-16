export const SearchInput = ({width, marginRight,marginTop})=>(
        <div 
            className="input-group" 
            style={{width:`${width}`,marginRight:`${marginRight}`}}>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                    <img src='img/search.png' style={{width:'23px'}} alt='' />
                </span>
            </div>
            <input type="text" 
                className="form-control" 
                style={{height:'37px'}}
                placeholder="جستجو" 
                aria-label="Username" 
                aria-describedby="basic-addon1" 
            />
        </div>
);