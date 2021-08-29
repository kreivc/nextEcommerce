import Head from "next/head";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";

const Cart = () => {
	const { state, dispatch } = useContext(DataContext);
	const { cart } = state;

	if (cart.length === 0)
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					height: "80vh",
					paddingTop: "60px",
				}}
			>
				<img
					className="w-100"
					src="./addtocart.gif"
					alt="empty_cart"
					style={{
						width: "300px",
						height: "320px",
						objectFit: "cover",
						objectPosition: "0 50%",
					}}
				/>
				<h3 className="text-center">
					Your cart is empty, <br />
					please try to add something to cart :D
				</h3>
			</div>
		);

	return (
		<div>
			<Head>
				<title>Cart Page</title>
			</Head>

			<h1>Cart</h1>
		</div>
	);
};

export default Cart;
