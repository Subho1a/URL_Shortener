import { Url } from "../Models/Url.js"
import shortid from "shortid";
import dotenv from "dotenv";
dotenv.config();

export const ShortUrl=async (req,res)=>{


    const longUrl=req.body.longUrl;
    const shortCode=shortid.generate();

//local domain
    // const _url=process.env.local_url;
    const _url="https://url-shortener-56ym.onrender.com"

    const ShortUrl=`${_url}/${shortCode}`

    //save to db

    const newUrl=new Url({shortCode,longUrl})
    await newUrl.save();

    console.log("short url saved: ",newUrl)

    res.render("index.ejs",{ShortUrl})


}

/*export const getOriginalUrl=async (req,res)=>{
    const shortCode=req.params.long;

    //find the url in db
    const originalUrl=await Url.findOne({shortCode});

    if(!originalUrl){
        return res.status(404).send("Url not found");
    }

    res.redirect(originalUrl.longUrl);
}
*/
export const getOriginalUrl = async (req, res) => {
    const shortCode = req.params.long;
    console.log("🔍 Requested shortcode:", shortCode);

    const originalUrl = await Url.findOne({ shortCode });
    console.log("📦 Found in DB:", originalUrl);

    if (!originalUrl) {
        return res.status(404).send(" URL not found");
    }

    res.redirect(originalUrl.longUrl);
};
