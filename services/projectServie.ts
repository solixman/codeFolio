import projectData from "../interfaces/projectData";
import Project from "../models/Project";


export async function create(id:string,data:projectData){

    try {
        if(!data.title) throw new Error('title is necessery to make a project')
        let project = new Project({profile:id});
        Object.assign(project, data);
        await project.save();
        return project;

    } catch (error) {
        console.log(error);
        throw error
    }

}