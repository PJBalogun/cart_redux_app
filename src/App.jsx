import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { useSelector, useDispatch } from "react-redux/";
import { useEffect, useState } from "react";
import { showNotification } from "./store/notification-slice";
import { sendCartData } from "./store/cart-Slice";

function App() {
	const [isFirstRender, setisFirstRender] = useState(true);
	const dispatch = useDispatch();
	const notification = useSelector((state) => state.notification.notification);
	const cart = useSelector((state) => state.cart);
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	console.log(isLoggedIn);

	useEffect(() => {
		if (isFirstRender) {
			setisFirstRender(false);
			return;
		}
		dispatch(sendCartData(cart));
	}, [cart, dispatch]);
	return (
		<div className="App">
			{notification && (
				<Notification type={notification.type} message={notification.message} />
			)}
			{!isLoggedIn && <Auth />} {isLoggedIn && <Layout />}
		</div>
	);
}

export default App;
