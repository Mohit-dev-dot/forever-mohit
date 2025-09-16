import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = 'mongodb://127.0.0.1:27017/forever';  // TEMP: hardcoded
    console.log('DEBUG using URI:', uri);

    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

export default connectDB;
