import * as experienceService from "../services/experienceService";

export async function createExperience(data: any) {
    try {
        return await experienceService.createExperience(data);
    } catch (error:any) {
        console.log(error);
        return {error:error.message}
    }
}


export async function deleteExperience(experienceId: string) {
  try {
    return await experienceService.deleteExperience(experienceId);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
