import { GraphQLString, GraphQLID } from "graphql";
import { experienceType } from "../types/experienceType";
import * as experienceController from "../../../controllers/experienceController";
import { requireAuth } from "../../../middlewares/authMiddleware";
import { messageType } from "../types/messageType";

export const experienceMutations = {
  createExperience: {
    type: experienceType,
    args: {
      role: { type: GraphQLString },
      company: { type: GraphQLString },
      city: { type: GraphQLString },
      description: { type: GraphQLString },
      startDate: { type: GraphQLString },
      endDate: { type: GraphQLString },
      profile: { type: GraphQLID },
    },
    resolve: async (_: any, args: any, context: any) => {
      await requireAuth(context.req);
      return experienceController.createExperience(args);
    },
  },

   deleteExperience: {
    type: messageType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (_: any, args: any, context: any) => {
      await requireAuth(context.req);
      return experienceController.deleteExperience(args.id);
    },
  },
  updateExperience: {
    type: experienceType,
    args: {
      id: { type: GraphQLID },
      role: { type: GraphQLString },
      company: { type: GraphQLString },
      city: { type: GraphQLString },
      description: { type: GraphQLString },
      startDate: { type: GraphQLString },
      endDate: { type: GraphQLString },
    },
    resolve: async (_: any, args: any, context: any) => {
      await requireAuth(context.req);
      return experienceController.updateExperience(args);
    },
}
}