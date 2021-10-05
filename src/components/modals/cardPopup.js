import Modal from 'react-modal';
import {CenterDivider} from '../diveder/centerDivider';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';


export const CardPopup = ({CardModalIsOpen, closeCardModal})=>{
    
    const counter = useSelector((state) => state.counter);
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const {decrement,removeItem}= bindActionCreators(actionCreators, dispatch);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'700px',
          height:'400px',
          padding:'40px 20px'
        },
        overlay:{
            backgroundColor: 'gray'
        }
      };

      

    return(
        <Modal
            isOpen={CardModalIsOpen}
            onRequestClose={closeCardModal}
            style={customStyles}
            ariaHideApp={false}
        >
           <div className='text-center'>
                <h4 className='text-success'>سبد خرید</h4>
                <CenterDivider 
                    width='60px'
                    color='green'
                />
                <h6 className='mt-5'>
                    {!counter?'سبد خرید شما خالی است':''}
                </h6>
                <div>
                    {items.map((item, index)=>{
                        return(
                            <div 
                                key={index} 
                                className='row mx-1'
                                style={{
                                    borderBottom:'1px solid black',
                                    paddingBottom:'10px'
                                }}
                            >
                                <div className='col'>
                                    <button 
                                        className='btn btn-close bg-danger'
                                        style={{marginTop:'23px', textAlign:'right'}}
                                        onClick={()=>{
                                            removeItem(item.id);
                                            decrement()
                                            }
                                        }
                                    >
                                    </button>
                                    <img 
                                        className=''
                                        src={item.src} 
                                        style={{
                                            width:'50px', 
                                            height:'50px', 
                                            marginRight:'30px',
                                            marginTop:'20px'
                                        }} 
                                        alt='' 
                                    />
                                </div>
                                    <div className='col' style={{textAlign:'right'}}>
                                        <p style={{marginTop:'30px'}}>{item.name}</p>
                                    </div>
                                    <div className='col' style={{textAlign:'left'}}>
                                        <p style={{marginTop:'30px'}}>{item.price}</p>
                                    </div>
                            </div>
                        );
                    })}
                </div>
           </div>
        </Modal> 
    );
};