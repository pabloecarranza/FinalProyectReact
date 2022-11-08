import React from "react";
import "./Cart.css";
import CartImage from "../../assets/shopping.svg";
import CartContext from "../../contexts/CartContext/CartContext";
import { useContext } from "react";
import Recipt from "../Recipt/Recipt";
import { Trash } from "react-bootstrap-icons";
import { Badge, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, onRemove } = useContext(CartContext);
  return (
    <div className="maincart-container">
      <h1> Shopping Cart </h1>
      <hr></hr>
      {products.length > 0 ? (
        <div className="big-container">
          <div className="maincart-products">
            {products.map((product) => {
              return (
                <div key={product.title} className="maincart-product">
                  <Badge
                    badgeContent={product.quantity}
                    color="secondary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <img src={product.image} alt={product.title}></img>
                  </Badge>
                  <div className="mainproduct-text">
                    <h2 className="cartproduct-title">{product.title}</h2>
                    <h3>${Number(product.price).toFixed(2)} </h3>
                  </div>
                  <h2 className="total-product">
                    Total: $
                    {Number(product.price * product.quantity).toFixed(2)}
                  </h2>
                  <span className="remove-product">
                    <Trash size={15} onClick={() => onRemove(product)} />
                  </span>
                </div>
              );
            })}
          </div>

          <div className="recipt-container">
            <Recipt />
            <Link className="link" to="/cart/checkout">
              <Button color="secondary" variant="outlined">
                GO TO CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <img src={CartImage} alt="cart empty"></img>
          <div className="emptycart-text">
            <h1> Oh no! Your cart is empty</h1>
            <Link className="link" to="/category/all">
              <Button color="secondary" variant="contained">
                GO SHOPPING
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
