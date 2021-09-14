module.exports = {
	images: {
		domains: ["res.cloudinary.com"],
	},
	env: {
		BASE_URL: process.env.BASE_URL_E,
		MONGODB_URL: process.env.MONGODB_URL_E,
		ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET_E,
		REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET_E,
		PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID_E,
		CLOUD_UPDATE_PRESET: process.env.CLOUD_UPDATE_PRESET_E,
		CLOUD_NAME: process.env.CLOUD_NAME_E,
		CLOUD_API: process.env.CLOUD_API_E,
	},
};
