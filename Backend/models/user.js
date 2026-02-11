const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    refreshTokens: [{
        token: String,
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function () {
    const user = this;
    if (!user.isModified('password')) return 

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    } catch (error) {
        throw error;
    }

})
userSchema.methods.comparePassword = async function (canditatePassword) {
    try {
        const isMatch = await bcrypt.compare(canditatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw new Error(error);
    }
};


const User = mongoose.model('User', userSchema);
module.exports = User;