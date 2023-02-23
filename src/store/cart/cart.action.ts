import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { withMatcher, createAction, ActionWithPayload } from "../../utils/reducers/reducer.utils";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
):CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[], productToRemove:CartItem):CartItem[] => {
  // find if cartItems contains productToRemove
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // if found, decrease quantity
  if(itemExists && productToRemove.quantity === 1){
    return removeItemCompletely(cartItems, productToRemove)
  };

  return cartItems.map((cartItem) => 
    cartItem.id === productToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  );
};

const removeItemCompletely = (cartItems: CartItem[], productToRemove: CartItem):CartItem[] => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean):SetIsCartOpen => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]):SetCartItems => 
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
};

export const removeItemFromCartCompletely = (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = removeItemCompletely(cartItems, productToRemove);
    return setCartItems(newCartItems);
};