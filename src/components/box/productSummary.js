import { RightDivider } from "../diveder/rightDivider";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';


export const ProductSummary = ({title, p1, p2, p3, p4, p5, p6, price, priceTitle, src})=>{
        const items = useSelector((state) => state.items);
        const dispatch = useDispatch();
        const {increament,addItems}  = bindActionCreators(actionCreators, dispatch);

        const addToCard= ()=> {
            const titleExist = items.find( ({ name }) => name === title );
            if(!titleExist){
                increament();
                addItems(title, priceTitle,src);
            }
        };

        return(
        <>
         <div className='container pt-5 pb-5'>
                <div 
                    className='row px-4 py-4 mx-3 mt-3' 
                    style={{background:'white'}}
                >
                    <div className='col-xl-6'>
                        <img 
                            className='product-summary-img'
                            src={src} 
                            style={{width:'510px', height:'500px'}} 
                            alt='' 
                            
                            />
                    </div>
                    <div className='col-xl-6'>
                        <h1 className='text-success' style={{fontSize:'1.5em', fontWeight:'bold'}}>{title}</h1>
                        <RightDivider 
                            width='60px'
                            color='gray'
                        />
                        <img src='img/rating_stars.png' style={{width:'120px'}} alt='' />
                        <div style={{lineHeight:'12px', fontSize:'1.1em'}}>
                            <p style={{fontWeight:'bold'}}>{priceTitle}</p>
                            <p>{p1}</p>
                            <p>{p2}</p>
                            <p>{p3}</p>
                            <p>{p4}</p>
                            <p>{p5}</p>
                            <p>{p6}</p>
                        </div>
                        <h4 className='text-success mt-5' style={{fontWeight:'bold'}}>{price}</h4>
                        <button
                             className="btn-lg btn-success mt-3" 
                             onClick={addToCard}
                        >
                                 افزودن به سبد خرید
                        </button>
                    </div>
                </div>
            </div>
    
    
    </>
);
};