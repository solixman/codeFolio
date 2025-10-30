import { GraphQLString } from "graphql";
import { projetcType } from "../types/projetcType";
import { requireAuth } from "../../../middlewares/authMiddleware";
import * as projectController from "../../../controllers/projectController";

export const projectMutations = {
    create: {
        type: projetcType,
        args: {
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            demoLink: { type: GraphQLString },
            image: { type: GraphQLString },
        },
        resolve:
            async (_: any, args: any, context: any) => {
                let {user}= await requireAuth(context.req);
                console.log(user);
                return await projectController.create(user,args);
            }

    }
}