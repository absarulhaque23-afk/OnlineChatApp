const User = require('../models/user');
const { generateToken } = require("../middleware/jwt");


async function userSignUpHandler(req, res) {
    const { username, email, password } = req.body;
    try {

        const newUser = new User({
            username,
            email,
            password
        });
        await newUser.save();

        const payload = {
            id: newUser.id,
            email: newUser.email,
            username: newUser.username
        };
        const token = generateToken(payload);
        console.log("Generated JWT token:", token);

        newUser.password = undefined; // Hide password in response
        res.status(201).json({ message: "User registered successfully", user: newUser, token });
    }

    catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
}

async function userLoginHandler(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const userSafe = user.toObject();
        delete userSafe.password;
        // Generate JWT token
        const payload = {
            id: user.id,
            email: user.email,
            username: user.username
        };
        const token = generateToken(payload);

        res.status(200).json({ message: "Login successful", user: userSafe, token });
    }
    catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }

}
module.exports = {
    userSignUpHandler,
    userLoginHandler
}
