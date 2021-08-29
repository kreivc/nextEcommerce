import Layout from "../components/Layout";
import "../styles/globals.css";
import { DataProvider } from "../store/GlobalState";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
	size: 4,
	color: "#0xFF212121",
	className: "z-50",
	delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return (
		<DataProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</DataProvider>
	);
}

export default MyApp;
