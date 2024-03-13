import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            minlength: 6,
        },
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("User", UserSchema);
