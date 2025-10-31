import Experience from "../models/Experience";
import Profile from "../models/Profile"

export async function createExperience(data: any) {
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

export async function deleteExperience(experienceId: string) {
  try {
    const experience = await Experience.findById(experienceId);
    if (!experience) {
      throw new Error("Experience not found");
    }

    await Experience.findByIdAndDelete(experienceId);
    return { success: true, message: "Experience deleted successfully" };
  } catch (error: any) {
    throw new Error(error.message);
  }
}