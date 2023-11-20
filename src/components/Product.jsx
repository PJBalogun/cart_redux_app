import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cart-Slice";
import "./Product.css";

const Product = ({ name, id, imgURL, price }) => {
	//intialize dipatch;
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(
			addToCart({
				name,
				price,
				id,
			})
		);
	};

	return (
		<div className="card">
			<img src={imgURL} alt={name} />
			<h2>{name}</h2>
			<p>$ {price}</p>
			<button onClick={addToCartHandler}>Add to cart</button>
		</div>
	);
};

export default Product;
