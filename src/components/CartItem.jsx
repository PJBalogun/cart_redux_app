import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { addToCart, removeFromCart } from "../store/cart-Slice";
const CartItem = ({ name, quantity, total, price, id }) => {
	const dispatch = useDispatch();

	const removeFromCartHandler = () => {
		dispatch(removeFromCart(id));
	};
	const addToCartHandler = () => {
		dispatch(
			addToCart({
				id,
				name,
				price,
			})
		);
	};
	return (
		<div className="cartItem">
			<h2> {name}</h2>
			<p>${price} /-</p>
			<p>x {quantity}</p>
			<article>Total ${total}</article>
			<button className="cart-actions" onClick={removeFromCartHandler}>
				-
			</button>
			<button className="cart-actions" onClick={addToCartHandler}>
				+
			</button>
		</div>
	);
};

export default CartItem;
