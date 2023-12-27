// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from '../reducers/Cart/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
