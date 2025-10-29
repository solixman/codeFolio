import * as userService from "../services/userService";
import * as profileService from "../services/profileService";


export async function update(data: any) {
    try {
        const userData = {
            userName: data.userName,
            email: data.email,
            role: data.role,
        };

        const profileData = {
            firstName: data.firstName,
            lastName: data.lastName,
            bio: data.bio,
            title: data.title,
            phone: data.phone,
            pfp: data.pfp,
            location: data.location,
        };

        let user = await userService.update(data.id,userData);
        let profile = await profileService.update(user._id, profileData);

        return {
            user,
            profile
        }

    } catch (err: any) {
        console.log(err)
        return {
            error: err.message
        }
    }


}