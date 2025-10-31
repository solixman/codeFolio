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

export async function deleteProject(id: string) {
    try {
        if (!id) throw new Error('the Id should be a valid one');

        return await projectService.deleteProject(id);
    } catch (error: any) {
        return { error: error.message }
    }
}

export async function updateProject(data:projectData) {
    try {

        return await projectService.update(data);
    } catch (error:any) {
        console.log(error);
        return { error: error.message }
    }
}

export async function getAll(){
    try {
        return await projectService.getAll();
    } catch (error:any) {
          console.log(error);
        return { error: error.message }
    }
}


export async function getOne(id:string){
    try {
        return await projectService.getOne(id);
    } catch (error:any) {
        console.log(error);
        return { error: error.message }
    }
}
