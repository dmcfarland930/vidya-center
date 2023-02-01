import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducers/reducer.utils";

const updateCartItemReducer = (cartItems) => {    
  const newCartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity, 
    0
  );    
  const newCartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  
  const payload = {
    cartItems, 
    cartCount: newCartCount,
    cartTotal: newCartTotal, 
  };

  dispatch(
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload)
  );
};

export const setIsCartOpen = (bool) => {
  dispatch(
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, 
      bool
    )
  );
};

export const addItemToCart = (productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  updateCartItemReducer(newCartItems);
};

export const removeItemFromCart = (productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  updateCartItemReducer(newCartItems);
};

export const removeItemFromCartCompletely = (productToRemove) => {
  const newCartItems = removeItemCompletely(cartItems, productToRemove);
  updateCartItemReducer(newCartItems);
};