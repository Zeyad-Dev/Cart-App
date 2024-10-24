import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../rtk/cart-slice";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let totalPrice = cart.reduce(
    (acc, product) => acc + +product.price * product.quantity,
    0
  );
  return (
    <div className="cart">
      <div className="container">
        <h1 className="heading">Welcome to your cart</h1>
        <div className="cart-content">
          <div className="cart-product-list">
            {cart.map(function (product) {
              return (
                <div className="product" key={product.id}>
                  <div className="image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="info">
                    <h3>Title: {product.title}</h3>
                    <span>ID: {product.id}</span>
                    <span>Price: {product.price}$</span>
                    <div className="quantity-content">
                      <p>Quantity:</p>
                      <div className="quantity">
                        <button
                          onClick={() => dispatch(decrementQuantity(product))}
                        >
                          -
                        </button>
                        <span> {product.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(product))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button onClick={() => dispatch(deleteFromCart(product))}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkout">
            <div className="text">
              <h3>checkout</h3>
              <p>Total Price: {totalPrice.toFixed(2)} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
