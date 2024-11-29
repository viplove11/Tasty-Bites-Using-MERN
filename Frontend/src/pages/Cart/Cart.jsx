import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const totalCartAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            const total = cartItem[item._id] * item.price;
            return (
              <>
                <div className="cart-items-title cart-items-item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${total}</p>
                  <p className="cross text-danger" onClick={() => removeFromCart(item._id)}>
                    <IoCloseCircle />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${totalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalCartAmount!== 0?`${2}`:`${0}`}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalCartAmount!== 0?`${totalCartAmount+2}`:`${0}`}</b>
            </div>
          </div>
            {totalCartAmount!==0?<button onClick={()=>{navigate('/PlaceOrder')}}>PROCEED TO CHECKOUT</button>:null}
        </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, enter here..</p>
              <div className="cart-promocode-input">
                <input type="text" name="" placeholder="Use Code" id="" />
                <button>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
