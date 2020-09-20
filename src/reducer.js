/* eslint-disable default-case */
export const initialState={
    basket:[ {id:"12324512",
          title:"the best stock image",
          price:12.99,
          rating:5,
          image:"https://www.creativindie.com/wp-content/uploads/2012/07/stock-image-site-pinterest-graphic-533x800.jpg",},],
};
const reducer = (state, action) => {
  
    switch (action.type){
        case 'ADD_TO_BASKET':
            //logic add item to basket
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
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