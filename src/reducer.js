/* eslint-disable default-case */
export const initialState={
    basket:[ ],
    user:null,
        };


export const getBasketTotal = (basket) => basket?.reduce((amount, item)=> item.price +amount,0);    

const reducer = (state, action) => {
  
    switch (action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            }
        case 'ADD_TO_BASKET':
            //logic add item to basket
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[],
            }
        case 'REMOVE_FROM_BASKET':
            //logic remove item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            if (index>= 0){
                // item exist and in basket remove it
                newBasket.splice(index,1);

            }else{
                console.warn(`can't remove product with id : ${action.id} as its is not found` )
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}
export default reducer;
/*
*/