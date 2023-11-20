import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import CartItem from "./CartItem";
const Layout = () => {
	const showCart = useSelector((state) => state.cart.showCart);
	const cartItems = useSelector((state) => state.cart.cartItems);
	let total = 0;
	
	cartItems.map((item) => {
		total += item.totalPrice;
	});

	return (
		<React.Fragment>
			<div className="layout">
				<Header />
				<Products />
				{showCart && <CartItems />}
				<div className="total-price">
					<h3>Total: ${total}</h3>
					<button className="orderBtn">Place Order</button>
				</div>{" "}
			</div>
		</React.Fragment>
	);
};

export default Layout;
