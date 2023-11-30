import { Schema, model } from 'mongoose';
//or import mongoose from 'mongoose'

export const userSchema = new Schema({
fullName:{type:String,required:true},
age:{type:Number,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true,unique:true}
},{timestamps:true})

module.exports  = model('User',userSchema);

