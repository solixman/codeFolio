import { GraphQLString } from "graphql";
import { projectType } from "../types/projectType";
import { requireAuth } from "../../../middlewares/authMiddleware";
import * as projectController from "../../../controllers/projectController";
import { messageType } from "../types/messageType";

export const projectMutations = {
    create: {
        type: projectType,
        args: {
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            demoLink: { type: GraphQLString },
            image: { type: GraphQLString },
        },
        resolve:
            async (_: any, args: any, context: any) => {
                let { user } = await requireAuth(context.req);
                return await projectController.create(user, args);
            }

    },
    deleteProject: {
        type: messageType,
        args: {
            id: {type:GraphQLString}
        },
        resolve: async (_: any, args: any, context: any) => {
            await requireAuth(context.req);
            return await projectController.deleteProject(args.id);
        }
    },
    updateProject:{
        type:projectType,
        args:{
            id:{type:GraphQLString},
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            demoLink: { type: GraphQLString },
            image: { type: GraphQLString },
        },
        resolve:async (_:any,args:any,context:any)=>{
             await requireAuth(context.req);
            // console.log('here');
            return projectController.updateProject(args);
        }
    }
}