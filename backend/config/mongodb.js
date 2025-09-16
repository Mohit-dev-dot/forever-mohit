import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("MONGO_URI is:", process.env.MONGO_URI);
    });

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
