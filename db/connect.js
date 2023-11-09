const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://Kamshinen:Ndat2013@nodeexpress.70ypf8v.mongodb.net/task-manager?retryWrites=true&w=majority";

  const connectDb=(url)=>{
    // return mongoose.connect(connectionString,{
    return mongoose.connect(url,{
      useNewUrlParser:true,
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true,
    })
  }


  module.exports=connectDb

//   .then(() => console.log("CONNECTED TO THE DB..."))
//   .catch((err) => console.log(err));
