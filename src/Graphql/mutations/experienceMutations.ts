import { GraphQLString, GraphQLID } from "graphql";
import { experienceType } from "../types/experienceType";
import * as experienceController from "../../../controllers/experienceController";
import { requireAuth } from "../../../middlewares/authMiddleware";

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
      return experienceController.createExperienceController(args);
    },
  },
};
