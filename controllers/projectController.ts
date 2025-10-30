import * as projectService from "../services/projectServie";
import UserPayload from "../interfaces/UserPayload"
import projectData from "../interfaces/projectData";

export async function create(user: UserPayload, data: projectData) {
    try {
        let id = user.id
        return await projectService.create(id, data);
        
    } catch (error: any) {
        return { error: error.message }
    }
}