import { createContext, useReducer } from "react";
import { createAction } from "../utils/firebase/reducer.utils";

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

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeItemFromCartCompletely: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
};

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return{
        ...state,
        isCartOpen: payload
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer.`)
  }
};

export const CartProvider = ({children}) => {
  const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemReducer = (newCartItems) => {    
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 
      0
    );    
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
       0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems, 
        cartTotal: newCartTotal, 
        cartCount: newCartCount
      })
    );
  };

  const setIsCartOpen = (bool) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, 
        bool
      )
    );
  };
  
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCartCompletely = (productToRemove) => {
    const newCartItems = removeItemCompletely(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    removeItemFromCart, 
    removeItemFromCartCompletely, 
    cartItems, 
    cartCount, 
    cartTotal 
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};