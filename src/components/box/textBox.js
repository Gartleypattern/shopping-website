
export const TextBox=({cardTitle, cardText})=>{
    return(
            <div className="text-box card text-muted bg-light py-2 px-3" 
                style={{maxWidth: '23rem', border:'none', borderRadius:'7px'}}>
                <div class="card-body" >
                    <h5 
                        class="card-title text-center text-dark" 
                        style={{fontWeight:'bold'}}>{cardTitle}
                    </h5>
                    <p class="card-text text-center" style={{border:'none'}}>{cardText}</p>
                </div>
            </div>
    );
};