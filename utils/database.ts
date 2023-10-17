import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectedToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('MongoDB is already connected')
        return; 
    }

    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        console.error("MONGODB_URI environment variable is not defined.");
        return;
    }

    try {
        await mongoose.connect(mongoUri,{
            dbName: "shoppingify",
        })

        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}