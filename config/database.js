import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        await  mongoose.connect("mongodb+srv://KunalCluster:kunal2907@kunalcluster.p0dle.mongodb.net/ReviewSystem");
        console.log("MongoDB connection established");
    } catch (err) {
        console.log("Error:", err);   
    }
};

export default dbConnect;
