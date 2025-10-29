import ProfileUpdateData from "../interfaces/UserUpdateData";
import Profile from "../models/Profile"



export async function update(id: any, data:ProfileUpdateData ) {

    try {

        let profile = await Profile.findOne({ userId: id });

        if (!profile) throw new Error('something went wrong, profile doesnt exist');

        Object.assign(profile, data);
        await profile.save()
        return profile;

    } catch (error) {
        throw error
    }

}