import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: false },
});

const User = mongoose.models.Users || mongoose.model('User', userSchema);
export default User;