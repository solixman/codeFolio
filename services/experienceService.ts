import Experience from "../models/Experience";
import Profile from "../models/Profile"

export async function createExperienceService(data: any) {
    try {
        let { role, company, startDate, profile } = data;

        if (!role || !company || !startDate || !profile) {
            throw new Error("role, company, startDate, and profile are required.");
        }

        if (data.endDate < data.startDate) {
            throw new Error("endDate cannot be before startDate.");
        }


        const existingProfile = await Profile.findById(profile);
        if (!existingProfile) {
            throw new Error("Profile not found.");
        }

        const experience = new Experience(data);
        
        await experience.save();
        return experience;

    } catch (error: any) {
        throw error;
    }
}
