import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {

  const { addItemToCart, removeItemFromCart, removeItemFromCartCompletely } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(item);
  const removeProductFromCart = () => removeItemFromCart(item);
  const removeProductFromCartCompletely = () => removeItemFromCartCompletely(item);


  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={item.imageUrl} alt={item.name}/>
      </div>
      <span className='name'>{item.name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeProductFromCart}>&#10094;</div>
        <span className='value'>{item.quantity}</span>
        <div className='arrow' onClick={addProductToCart}>&#10095;</div>
      </span>
      <span className='price'>${item.quantity * item.price}</span>
      <div className='remove-button'>
        <span onClick={removeProductFromCartCompletely}>&#10005;</span>
      </div>
    </div>
  );
};

export default CheckoutItem;