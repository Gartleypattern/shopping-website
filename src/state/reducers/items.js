const defaultStates= [];
export const items= (state= defaultStates, action)=> {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.products
            ]
        case 'REMOVE_ITEM':
            return state.filter(({id})=> id !== action.payload)
        default:
            return state;
    };
};