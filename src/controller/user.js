import User from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    try {
        const body = req.body;
        const existUser = await User.findOne({ email: body.email });

        if (existUser) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(body.password, salt);

        const user = await new User({
            name: body.name,
            email: body.email,
            password: hashed,
        }).save()
        return res.status(200).json({
            data: user,
        });
    } catch (error) { }
};



export const signing = async (req, res) => {
    try {
        const body = req.body

        const user = await User.findOne({ email: body.email });
        // check email
        if (!user) {
            return res.status(400).json({
                message: "Email does not exist"
            })
        }
        //check mk
        const checkPassword = await bcrypt.compare(
            body.password,
            user.password
        )

        if (!checkPassword) {
            return res.status(400).json({
                message: "Wrong password"
            })
        }

        if (user && checkPassword) {
            const token = jwt.sign({ _id: user._id, admin: user.admin }, "DangThai");
            
            return res.status(200).json({
                data: user,
                accessToken: token
            })
        }
    } catch (error) {
        res.status(400).json({ message: "Error" });
    }
};



