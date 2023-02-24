import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, removeItemFromCartCompletely } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { CheckoutItemContainer } from './checkout-item.styles';

import { FC } from 'react';
import { CartItem } from '../../store/cart/cart.types';

type CartItemProps = {
  item: CartItem
};

const CheckoutItem: FC<CartItemProps> = ({item}) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = item;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, item));
  const removeProductFromCart = () => dispatch(removeItemFromCart(cartItems, item));
  const removeProductFromCartCompletely = () => dispatch(removeItemFromCartCompletely(cartItems, item));

  return (
    <CheckoutItemContainer>
      <div className='image-container'>
        <img src={imageUrl} alt={name}/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeProductFromCart}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addProductToCart}>&#10095;</div>
      </span>
      <span className='price'>${quantity * price}</span>
      <div className='remove-button'>
        <span onClick={removeProductFromCartCompletely}>&#10005;</span>
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;