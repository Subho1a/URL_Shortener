import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
try {
  mongoose
    .connect(
      process.env.mongo_url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
        tlsAllowInvalidCertificates: false,
      },
      {
        dbName: "NodeJs_Learning",
      }
    )
    .then(() => {
      console.log("Connected to MongoDb..");
    });
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

export default mongoose;
