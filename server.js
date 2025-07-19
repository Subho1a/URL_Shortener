import express from 'express'
const app = express();
import mongoose from "./db.js";
import { ShortUrl,getOriginalUrl } from "./Controllers/url.js";
import path, { join } from 'path';

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
// res.send('hi from home')
res.render('index.ejs',{ShortUrl:null}
)})

// shortening url logic
app.post('/short',ShortUrl)

// getting original url logic dynamically route
app.get('/:long',getOriginalUrl)

const port=3000;
app.listen(port,()=>{console.log(`server is live at: ${port}`)})