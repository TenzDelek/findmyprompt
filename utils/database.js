import mongoose from "mongoose";

let isConnected=false;//track the connection

export const connectToDB=async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected)
    {
        console.log('connected to mongo');
        return;
    }
    //if not connected
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_prompt",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected=true;
        console.log('finally connected')
    } catch (error) {
        console.log(error);
    }
}