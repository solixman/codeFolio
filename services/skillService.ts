import { profile } from "console";
import { SkillData } from "../interfaces/SkillData";
import Profile from "../models/Profile";
import Skill from "../models/Skill";
import Project from "../models/Project";





export async function create(id:string,data: SkillData) {

    try {
        if (!data.name) throw new Error('name is necessery to make a project')
        let skill = new Skill({user: id});
        Object.assign(skill, data);
        skill = await skill.save();

        return {
             id: skill.id,
             name: skill.name,
             level: skill.level,
             category: skill.category,
            profile:skill.user,
             message:'skill created succesfully'
        };

    } catch (error) {
        console.log(error);
        throw error
    }
}

export async function deleteSkill(id: string) {
    try {
        const exists = await Skill.exists({ _id: id });
        if (!exists) throw new Error('something went wrong, id is not valid');

        await Skill.findByIdAndDelete(id);
        return { message: 'skill deleted succesfully' };
    } catch (error) {
        console.log(error);
        throw error;
    }
}



export async function attachSkill(projectId: string, skillId: string) {
    try {
        const project = await Project.findById(projectId);
        if (!project) throw new Error("Project not found");

        const skill = await Skill.findById(skillId);
        if (!skill) throw new Error("Skill not found");

        if (!Array.isArray(project.skills)) {
            project.skills = [];
        }

        if(project.skills.includes(skillId))  throw new Error("Skill already attached to this project");

        project.skills.push(skillId);
        await project.save();

        return {
            message: "attached succesfully"
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
