import { CartItem } from "../../interfaces/Cart/interfaces";

// cartReducer.js
const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cart.find((item: any) => item.name === action.payload.name)) {
        const updatedCart = state.cart.map((item: any) => item.name === action.payload.name ? { ...item, quantity: item.quantity + 1 } : item)

        return {
          ...state,
          cart: [...updatedCart]
        }
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_FROM_CART':
      if (state.cart.find((item: any) => item.name === action.payload.name)) {
        const itemToRemove: CartItem = state.cart.filter((item: any) => item.name === action.payload.name)[0];

        if (itemToRemove.quantity === 1) {
          const updatedCart = state.cart.filter((item: any) => item.name !== action.payload.name)

          return {
            ...state,
            cart: [...updatedCart]
          }
        } else {
          const updatedCart = state.cart.map((item: any) => item.name === action.payload.name ? { ...item, quantity: item.quantity - 1 } : item)

          return {
            ...state,
            cart: [...updatedCart]
          }
        }
      }

      return state;
    case 'REMOVE_ALL_FROM_CART':
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
};

export default cartReducer;
