import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducers/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const itemFound = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if(itemFound){
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  };

  //return new array with modified cartItems / new cartItem
  return [...cartItems, { ...productToAdd, quantity: 1}]
};

const removeItemCompletely = (cartItems, productToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
};

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems contains productToRemove
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // if found, decrease quantity
  if(itemExists){
    if(productToRemove.quantity === 1){
      return removeItemCompletely(cartItems, productToRemove)
    };
    return cartItems.map((cartItem) => 
      cartItem.id === productToRemove.id 
      ? {...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    );
  };
};

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCartCompletely = (cartItems, productToRemove) => {
  const newCartItems = removeItemCompletely(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};