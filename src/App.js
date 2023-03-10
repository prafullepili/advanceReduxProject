import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart)
  console.log(cart)
  useEffect(() => {
    fetch('https://redux-585d5-default-rtdb.firebaseio.com/cart.json', {
      method: "PUT",
      body: JSON.stringify(cart),
    })
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
