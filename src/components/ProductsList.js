import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/products-slice";
import { addToCart } from "../rtk/cart-slice";
import "./ProductsList.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function ProductsList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="product-list">
      <div className="container">
        <h1 className="heading">Welcome to products List</h1>
        {products.length === 0 ? (
          <Loading />
        ) : (
          <div className="product-content">
            {products.map((product) => (
              <div className="card" key={product.id}>
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-body">
                  <h3>{product.title.slice(0, 15)}...</h3>
                  <p>{product.description.slice(0, 100)}...</p>
                  <span>{`Price: ${product.price} $`}</span>
                </div>
                <div className="options">
                  <Link
                    to={`products/${product.id}`}
                    className="btn btn-danger"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="btn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default ProductsList;
