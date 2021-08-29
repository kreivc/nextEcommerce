module.exports = {
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		BASE_URL: process.env.BASE_URL_E,
		MONGODB_URL: process.env.MONGODB_URL_E,
		ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET_E,
		REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET_E,
	},
};
