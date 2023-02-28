import { useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, []);

  return (
    <CartDropDownContainer>
      <CartItems>
        {
          cartItems.length ? 
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}/>
          )) 
          :
          (<EmptyMessage>Your cart is empty.</EmptyMessage>)
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
};

export default CartDropdown;