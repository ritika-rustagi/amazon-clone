//for data layer logic
  
export const initialState = {
  basket: [],
  user: null
};

//Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITEM TO BASKET
            return {
                ...state,
                basket: [...state.basket,action.item],
            }
            
        case 'REMOVE_FROM_BASKET':
            //LOGIC FROM REMOVING ITEM FROM BAKSET

            //we cloned the basket
            let newBasket=[...state.basket];

            //we check to see if product exists in basket
            const index=state.basket.findIndex((basketItem)=> basketItem.id===action.id);
            

            if(index>=0){
                //item exists in basket remove it
                newBasket.splice(index,1);

            }
            return { ...state, basket:newBasket}
        default:
            return state;
    }
}

export default reducer;