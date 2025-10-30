import { userType } from './../src/Graphql/types/UserType';
import projectData from "../interfaces/projectData";
import Project from "../models/Project";


export async function create(id: string, data: projectData) {

    try {
        if (!data.title) throw new Error('title is necessery to make a project')
        let project = new Project({ profile: id });
        Object.assign(project, data);
        await project.save();
        return project;

    } catch (error) {
        console.log(error);
        throw error
    }
}


export async function deleteProject(id: string) {
    try {
        let exists= !Project.exists({id:id})

        if(!exists) throw new Error('something went wrong, id is not valid');

        await Project.findOneAndDelete(id)
        return { message: 'project deleted succesfully' }

    } catch (error) {
        console.log(error);
        throw error;
    }
} 
