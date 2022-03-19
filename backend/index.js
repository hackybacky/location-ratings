const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
const app = express();
app.use(express.json());
const pinRoute = require("./routes/pin")
const userRoute = require("./routes/user")
mongoose.connect(process.env.mongo_url, { useNewUrlParser: true ,useUnifiedTopology:true }).then(() => {
    console.log(" mongodb connected successfully")
})
    .catch((err)=>{console.log(err)})
    ; 

app.use("/api/pins",pinRoute)
app.use("api/user", userRoute)

app.listen(8800, () => {
    console.log("backend server is running")
})

