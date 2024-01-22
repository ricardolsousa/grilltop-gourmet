// cartActions.js
export const addToCart = (item: any) => {
    return {
      type: 'ADD_TO_CART',
      payload: item,
    };
  };

  export const removeFromCart = (item: any) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: item,
    };
  };

  export const removeAllFromCart = () => {
    return {
      type: 'REMOVE_ALL_FROM_CART',
      payload: []
    }
  }
  