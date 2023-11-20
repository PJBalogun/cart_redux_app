import React from "react";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "../store/notification-slice";

const Notification = ({ message, type }) => {
	const notification = useSelector((state) => state.notification.notification);
	const dispatch = useDispatch();
	const handleCloseNotification = () => {
		dispatch(
			showNotification({
				open: false,
			})
		);
	};
	return (
		<div>
			{notification.open && (
				<Alert onClose={handleCloseNotification} severity={type}>
					{message}
				</Alert>
			)}
		</div>
	);
};

export default Notification;
