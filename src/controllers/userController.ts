import {Request,Response} from 'express'
import { set } from 'mongoose';
//import User from '../models/userModel'
const userModel = require("../models/userModel")

export const createUser = async function(req:Request,res:Response) {
const {fullName,age,email,password} :{fullName:string,age:number,email:string,password:string} = req.body;
const data = await userModel.create(req.body);
return res.status(201).send({status:true,message:data})
}

export const findAllUsers = async function(req:Request,res:Response) {
const data = await userModel.find();
return res.status(200).send({status:true,message:data});
}

export const deleteUserById = async function(req:Request,res:Response) {
const {userId:userId}:{userId:string} = req.body;
const data = await userModel.deleteOne({_id:userId});
if(!data) return res.status(200).send({status:true,message:'user not exists'});
return res.status(200).send({status:true,message:data});
}

export  const updateUserById = async function(req:Request,res:Response) {
 const {userId,fullName,age,email,password}: {userId:string,fullName:string,age:number,email:string,password:string} = req.body;
const data = await userModel.findOne({_id:userId});
if(!data) return res.status(200).send({status:false,message:"user not exists"});
const data1 = await userModel.findOneAndUpdate(
    {_id:userId},
    {$set:{fullName:fullName,age:age,email:email,password:password}},
    {new:true,upsert:true}
    )
return res.status(200).send({status:true,message:data1});
}