import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { LoginForms } from '../forms/loginForms';

export const LoginPopup = ({modalIsOpen, closeModal, handleSubmit })=>{
    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width:'900px',
          height:'500px',
          padding:'40px 20px'
        },
        overlay:{
            backgroundColor: 'gray'
        }
      };
      
    return(
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
        >
            <div className='text-center py-2'>
                <button className='btn-lg btn-danger'>G+ ورود با گوگل</button>
            </div>
                <form className='form-group'>
                    <LoginForms />
                    <button 
                        onClick={handleSubmit}
                        className='btn-lg btn-success mt-3' 
                        type='submit'
                        style={{width:'30%'}}
                    >ورود
                    </button>
                    <p className='mt-4'>
                        <NavLink  className='text-decoration-none text-dark' to='/reset-password'>
                        گذرواژه خود را فراموش کرده اید؟
                        </NavLink>
                    </p>
                </form>
        </Modal> 
    );
};