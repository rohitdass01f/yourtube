import User from '../models/Auth.js';
import mongoose from 'mongoose';

const login = async (req, res) => {
    const { email, fullname, image } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser){
         try {
             const newUser = await User.create({email, fullname, image});
            res.status(200).json({ result: newUser });
            } catch (error) {
                res.status(500).json({message: "Error creating user", error});
                return;
            }
        } else {
            res.status(200).json({ result: existingUser });
        }
    } catch (error) {
        res.status(500).json({message: "Error logging in", error});
        return;
    }
};


const updateprofile = async (req, res) => {
  const { id: _id } = req.params;
  const { channelname, description } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(500).json({ message: "User unavailable..." });
  }
  try {
    const updatedata = await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          channelname: channelname,
          description: description,
        },
      },
      { new: true }
    );
    return res.status(201).json(updatedata);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


export { login, updateprofile };