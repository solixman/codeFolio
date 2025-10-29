import ProfileUpdateData from "../interfaces/ProfileUpdateData";
import Profile from "../models/Profile"



export async function update(id: any, data: ProfileUpdateData) {

    try {

        let profile = await Profile.findOne({ user: id });

        if (!profile) {
            profile = new Profile({user:id});
        }

        Object.assign(profile, data);
        profile = await profile.save()

        return {
            id: profile._id,
            firstName: profile.firstName,
            lastName: profile.lastName,
            bio: profile.bio,
            title: profile.title,
            phone: profile.phone,
            pfp: profile.pfp,
            location: profile.location,
        };

    } catch (error) {
        throw error
    }

}