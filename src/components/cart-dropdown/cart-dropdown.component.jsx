import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

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