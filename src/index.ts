import { app } from './app';
import  dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

const MONGODB_URI='mongodb://127.0.0.1:27017/test222'

mongoose.connect(MONGODB_URI);

app.listen(process.env.PORT||3000,function(){
console.log("app is listening on port "+(process.env.PORT||3000));
})


