import Head from "next/head";
import { useState } from "react";
import { getData } from "../utils/fetchData";
import ProductItem from "../components/product/ProductItem";

const Home = (props) => {
	const [products, setProducts] = useState(props.product);

	return (
		<div className="products">
			<Head>
				<title>Home Page</title>
			</Head>

			{products.length === 0 ? (
				<h2>No Products</h2>
			) : (
				products.map((product) => (
					<ProductItem key={product._id} product={product} />
				))
			)}
		</div>
	);
};

export default Home;

export async function getServerSideProps() {
	const res = await getData("/product");

	return {
		props: {
			product: res.products,
			result: res.result,
		},
	};
}
