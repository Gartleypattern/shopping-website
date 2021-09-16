import { v4 as uuidv4 } from 'uuid';

export const increament = ()=>{
    return((dispatch)=>{
        dispatch({
            type : 'Increment'
        });
    });
};

export const decrement = ()=>{
    return((dispatch)=>{
        dispatch({
            type : 'Decrement'
        });
    });
};

export const addItems = (name,price,src) =>{
    return((dispatch)=>{
        dispatch({
            type:'ADD_ITEM',
            products:{
                id:uuidv4(),
                name,
                price,
                src
            }
        });
    });
};

export const removeItem = (id) =>{
    return((dispatch)=>{
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        });
    });
};