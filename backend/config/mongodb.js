import mongoose from 'mongoose'

const connectDB = async() => {
    mongoose.connection.on('connected', ()=>{
        console.log(console.log("MONGO_URI is:", process.env.MONGO_URI);
)
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;
