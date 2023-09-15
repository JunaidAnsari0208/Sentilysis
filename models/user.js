import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
})

// For Next.js the route is only going to be created and called at the time of running
// The models package from Mongoose stores all the registered models, if a user already exists in the models object, it assigns
// that existing model to user variable

// If a user does not exist in models object, a new model function is created and then stored in models



// For regular express backend
const User = models.User || model("User", UserSchema);
export default User;

