import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
