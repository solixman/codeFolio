import { UserProfileInput } from './../interfaces/UserProfileInputs';
import * as userService from "../services/userService";
import * as profileService from "../services/profileService";


export async function update(data: UserProfileInput) {
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
        let id = process.env.ID!;

        let user = await userService.update(id, userData);
        let profile = await profileService.update(id, profileData);
        return { user, profile }
    } catch (err: any) {
        console.log(err)
        return {
            error: err.message
        }
    }
}

export async  function getUser() {
    {
        try {
            let id = process.env.ID!;
            
            let user = await userService.getone(id);
            let profile = await profileService.getone(id);
             console.log(user,profile);
            return {user,profile};
        } catch (error: any) {
            return {error: error.message}
        }
        
    }
}