import { useEffect, useRef } from "react";
import { postData } from "../utils/fetchData";

const paypalBtn = ({ total, address, mobile, state, dispatch }) => {
	const refPaypalBtn = useRef();
	const { cart, auth, orders } = state;

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: function (data, actions, err) {
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: total,
								},
							},
						],
					});
				},
				onApprove: function (data, actions) {
					dispatch({
						type: "NOTIFY",
						payload: { loading: true },
					});

					return actions.order.capture().then(function (details) {
						postData(
							"order",
							{ address, mobile, cart, total },
							auth.token
						).then((res) => {
							if (res.err)
								return dispatch({
									type: "NOTIFY",
									payload: { error: res.err },
								});

							dispatch({
								type: "ADD_CART",
								payload: [],
							});

							const newOrder = {
								...res.newOrder,
								user: auth.user,
							};

							dispatch({
								type: "ADD_ORDERS",
								payload: [...orders, newOrder],
							});

							dispatch({
								type: "NOTIFY",
								payload: { success: res.msg },
							});
						});
					});
				},
				onError: (err) => {
					console.log(err);
				},
			})
			.render(refPaypalBtn.current);
	}, []);

	return <div ref={refPaypalBtn}></div>;
};

export default paypalBtn;
