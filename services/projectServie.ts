import projectData from "../interfaces/projectData";
import Project from "../models/Project";


export async function create(id: string, data: projectData) {

    try {
        if (!data.title) throw new Error('title is necessery to make a project')
        let project = new Project({ profile: id });
        Object.assign(project, data);
        project = await project.save();

        return {
            id: project.id.ToString,
            title: project.title,
            description: project.description,
            demoLink: project.demoLink,
            image: project.image,
        };

    } catch (error) {
        console.log(error);
        throw error
    }
}


export async function deleteProject(id: string) {
    try {
        let exists = !Project.exists({ id: id })

        if (!exists) throw new Error('something went wrong, id is not valid');

        await Project.findOneAndDelete(id)
        return { message: 'project deleted succesfully' }

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function update(data: projectData) {
    try {
        let project = await Project.findById(data.id);
        if (!project) throw new Error("project doesn't exist");

        if (data.title) project.title = data.title;
        if (data.image) project.image = data.image;
        if (data.demoLink) project.demoLink = data.demoLink;
        if (data.description) project.description = data.description;
       console.log(project)
        await project.save();
        return project;

    } catch (error) {
        throw error;
    }
}

export async function getAll(){
    try {
         return await Project.find();
    } catch (error:any) {
             throw error;
    }
}


export async function getOne(id:string){
    try {
        let project= await Project.findById(id);

        if(!project) throw new Error('something went wrong, id is not on database');
        return project;
    } catch (error:any) {
       throw error;
    }
}
