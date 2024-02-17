const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newPassword = await bcrypt.hash(password, 10);
        await User.create({
            username,
            email,
            password: newPassword,
        });
        const user = User.findOne({
            email,
            password: newPassword
        })
        const access_token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.SECRET_KEY
        );
        return res.status(201).json({
            message: "User created",
            access_token: access_token
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
        const access_token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.SECRET_KEY
        );

        return res.status(200).json({
            message: "login success",
            access_token: access_token
        });
    }

    return res.status(404).json({
        message: "login failed"

    });
};

module.exports = { createUser, loginUser };