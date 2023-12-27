import { Cart } from "../../interfaces/Cart/interfaces";

// cartReducer.js
const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': 
      if (state.cart.find((item: any) => item.name === action.payload.name)) {
        const updatedCart = state.cart.map((item: any) => item.name === action.payload.name ? { ...item, quantity: item.quantity + 1} : item)
        
        return {
          ...state,
          cart: [...updatedCart]
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ... action.payload, quantity: 1 } ],
        };      
      }
    default:
      return state;
  }
};

export default cartReducer;
