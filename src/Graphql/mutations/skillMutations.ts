import { Context } from 'vm';
import { GraphQLString } from "graphql";
import { createSkillType } from "../types/createSkillType";
import { requireAuth } from "../../../middlewares/authMiddleware";
import * as skillController from "../../../controllers/skillController"


export const skillMutations = {
    create: {
        type: createSkillType,
        args: {
            name: { type: GraphQLString },
            level: { type: GraphQLString },
            category: { type: GraphQLString },
        },
        resolve:
            async (_: any, args: any, context: Context) => {
                let {user}= await requireAuth(context.req);
                return await skillController.create(user,args);
            }
    },
}