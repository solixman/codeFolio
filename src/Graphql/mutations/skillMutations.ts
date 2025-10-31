import { Context } from 'vm';
import { GraphQLString } from "graphql";
import { createSkillType } from "../types/createSkillType";
import { requireAuth } from "../../../middlewares/authMiddleware";
import * as skillController from "../../../controllers/skillController"
import { messageType } from '../types/messageType';
import { projectType } from '../types/projectType';


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
    deleteSkill: {
        type: messageType,
        args: {
            id: { type: GraphQLString }
        },
        resolve: async (_: any, args: any, context: Context) => {
            await requireAuth(context.req);
            return await skillController.deleteSkill(args.id);
        }
    },
    attachSkill: {
    type: messageType,
    args: {
      projectId: { type: GraphQLString },
      skillId: { type: GraphQLString },
    },
    resolve: async (_: any, args: any, context: any) => {
      await requireAuth(context.req);
      return skillController.attachSkill(args.projectId, args.skillId);
    },
  },
}