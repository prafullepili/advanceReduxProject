import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My first book",
    price: 6,
    description: 'my first book i ever wrote'
  },
  {
    id: "p2",
    title: "My second book",
    price: 12,
    description: 'my second book i ever wrote'
  },
  {
    id: "p3",
    title: "My third book",
    price: 10,
    description: 'my third book i ever wrote'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}

      </ul>
    </section>
  );
};

export default Products;
