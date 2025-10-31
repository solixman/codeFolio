import { SkillData } from "../interfaces/SkillData";
import UserPayload from "../interfaces/UserPayload";
import * as skillService from "../services/skillService"; 



export async function create( user:UserPayload,data: SkillData) {
    try {
         
        return await skillService.create(user.id,data);

    } catch (error: any) {
        return { error: error.message }
    }
}

export async function deleteSkill(id: string) {
    try {
        if (!id) throw new Error('the Id should be a valid one');

        return await skillService.deleteSkill(id);
    } catch (error: any) {
        return { error: error.message };
    }
}