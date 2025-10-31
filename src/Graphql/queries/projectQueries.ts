import { allProjects } from "../types/allProjects";
import { Context } from "vm";
import * as projectController from "../../../controllers/projectController";
import { projectType } from "../types/projectType";
import { GraphQLID } from "graphql";


export const projectQueries={
    getProjects:{
        type:allProjects,
        resolve:async() =>{
            return await projectController.getAll();
        }
    },
    getProject:{
  type: projectType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (_: any, args: any) => {
    return await projectController.getOne(args.id)},
}
}

