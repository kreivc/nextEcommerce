import mongoose from "mongoose";

const connectDB = () => {
	if (mongoose.connections[0].readyState) {
		console.log("Already connected.");
		return;
	}
	mongoose
		.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})
		.then(console.log("Connected to MongoDB 🍀"))
		.catch((err) => console.log(err));
};

export default connectDB;
