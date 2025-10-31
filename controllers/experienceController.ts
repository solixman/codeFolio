import * as experienceService from "../services/experienceService";

export async function createExperienceController(data: any) {
  // Controller only forwards to the service
  return await experienceService.createExperienceService(data);
}
