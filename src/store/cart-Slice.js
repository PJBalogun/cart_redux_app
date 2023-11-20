import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./notification-slice";

const initialState = {
	cartItems: [],
	totalQuantity: 0,
	showCart: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			console.log(newItem);

			//check for availale items
			const existingItem = state.cartItems.find(
				(item) => item.id === newItem.id
			);

			// operation for existing items
			if (existingItem) {
				console.log("it exists");
				existingItem.quantity += 1;
				existingItem.totalPrice += newItem.price;
			} else {
				// operation for new items
				state.cartItems.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
				});
				state.totalQuantity += 1;
			}
		},
		removeFromCart: (state, action) => {
			const itemId = action.payload;
			console.log(itemId);

			const existingItem = state.cartItems.find((item) => item.id === itemId);

			if (existingItem.quantity === 1) {
				state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
				console.log(state.cartItems);
			} else {
				existingItem.quantity -= 1;
				existingItem.totalPrice -= existingItem.price;
			}
		},
		setShowCart: (state) => {
			state.showCart = !state.showCart;
		},
	},
});

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			showNotification({
				open: true,
				message: "Sending Request",
				type: "warning",
			})
		);
		const sendRequest = async () => {
			const res = await fetch(
				"https://redux-tut-bc9eb-default-rtdb.firebaseio.com/cartItems.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);
			dispatch(
				showNotification({
					open: true,
					message: "Sending Request To Database Sucessfully",
					type: "success",
				})
			);
		};
		try {
			await sendRequest();
		} catch (error) {
			dispatch(
				showNotification({
					open: true,
					message: "Sending Request Failed",
					type: "error",
				})
			);
		}
	};
};

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;

export default cartSlice;
