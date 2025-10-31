import { allProjects } from "../types/allProjects";
import { Context } from "vm";
import { requireAuth } from "../../../middlewares/authMiddleware";
import * as projectController from "../../../controllers/projectController";


export const projectQueries={
    getProjects:{
        type:allProjects,
        resolve:async(_:any,__:any,context:Context) =>{
            return await projectController.getAll();
        }
    }
}

