const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/USER-MANAGEMENT");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.get('/',(req,res)=>{
//     res.send('get')
// })

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

// const adminRoutes=require('./routes/adminRoutes')
// app.use('/admin',adminRoutes)

app.listen(3000);
