import { GraphQLString } from "graphql";
import { projectType } from "../types/projectType";
import { requireAuth } from "../../../middlewares/authMiddleware";
import * as projectController from "../../../controllers/projectController";
import { messageType } from "../types/messageType";
import { Context } from "vm";

export const projectMutations = {
    createProject: {
        type: projectType,
        args: {
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            demoLink: { type: GraphQLString },
            image: { type: GraphQLString },
        },
        resolve:
            async (_: any, args: any, context: Context) => {
                let { user } = await requireAuth(context.req);
                return await projectController.create(user, args);
            }

    },
    deleteProject: {
        type: messageType,
        args: {
            id: { type: GraphQLString }
        },
        resolve: async (_: any, args: any, context: Context) => {
            await requireAuth(context.req);
            return await projectController.deleteProject(args.id);
        }
    },
    updateProject: {
        type: projectType,
        args: {
            id: { type: GraphQLString },
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            demoLink: { type: GraphQLString },
            image: { type: GraphQLString },
        },
        resolve: async (_: any, args: any, context: Context) => {
            await requireAuth(context.req);
            return projectController.updateProject(args);
        }
    }
}