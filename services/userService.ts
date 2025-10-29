import UserUpdateData from "../interfaces/UserUpdateData";
import User from "../models/User";



export async function update(id: string, data: UserUpdateData) {
    try {

        let user = await User.findById(id);
        if (!user) {
            throw new Error("something went wrong, this user doesnt exist")
        }

        Object.assign(user, data)
        user = await user.save();

        return {
            id: user._id,
            userName: user.userName,
            email: user.email,
            role: user.role,
        };

    } catch (error) {
        throw error;
    }
} 