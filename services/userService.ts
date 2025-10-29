import UserUpdateData from "../interfaces/ProfileUpdateData";
import User from "../models/User";



export async function update(id:string,data: UserUpdateData) {
    try {

        let user = await User.findById(id);
        if (!user) {
            throw new Error("something went wrong, this user doesnt exist")
        }

        Object.assign(user, data)
        await user.save();
        return user

    } catch (error) {
        throw error;
    }
} 