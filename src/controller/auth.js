import User from "../models/user";

export const findUserById = async (req, res, next) => {
  try {
    const id = req.params.userID;
    const user = await User.findById(id)
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      message: "User not found"
    })
  }
}


export const listUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};



export const updateUser = async (req, res) => {
  try {
    const id = req.params.userId;
    console.log(req.params);
    const body = req.body
    const user = await User.findOneAndUpdate({ _id: id }, body, { new: true })
    res.status(200).json({
      data: user
    })
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};



export const removeUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndRemove({ _id: id })
    res.status(200).json({
      data: user
    })
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};