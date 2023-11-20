import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "../store/cart-Slice";
import "./Cart.css";

const Cart = () => {
	const quantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch();
	return (
		<div className="cartIcon">
			<h3 onClick={() => dispatch(setShowCart())}>Cart: {quantity} Items</h3>
		</div>
	);
};

export default Cart;
