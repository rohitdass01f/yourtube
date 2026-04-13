import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
     fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    channelname: {
        type: String,
        
    },
    discription: {
        type: String,
    },
    image: {
        type: String,
    },
    joinedon: {
        type: Date,
        default: Date.now
    },
});
const User = mongoose.model("User", userSchema);
export default User;