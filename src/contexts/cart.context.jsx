import { createContext, useState, useEffect } from "react";

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

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItemFromCartCompletely = (productToRemove) => {
    setCartItems(removeItemCompletely(cartItems, productToRemove));
  };

  const value = { isCartOpen , setIsCartOpen, addItemToCart, removeItemFromCart, removeItemFromCartCompletely, cartItems, cartCount, cartTotal };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};