import mongoose from "mongoose";
import { ShortUrl } from "../Controllers/url.js";

const   urlSchema=new mongoose.Schema({

    shortCode:{
        type:String
    },
    longUrl:String

})

export const Url=mongoose.model("shortURL",urlSchema)