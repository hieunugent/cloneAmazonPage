/* eslint-disable default-case */
export const initialState={
    basket:[],
};
const reducer = (state, action) => {
  
    switch (action.type){
        case 'ADD_TO_BASKET':
            //logic add item to basket
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //logic remove item from basket
            return {state}
            break;
        default:
            return state;
    }
}
export default reducer;
/*
*/