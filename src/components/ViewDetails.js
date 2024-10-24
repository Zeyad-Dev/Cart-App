import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./ViewDetails.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/cart-slice";
import Loading from "./Loading";

function ViewDetails() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  if (product === null) {
    return (
      <Container className="details-contnet">
        <Loading />
      </Container>
    );
  }
  return (
    <div className="details">
      <div className="container">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="body">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div>
            <span>Price: {product.price} $</span>
            <Button
              variant="success"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewDetails;
