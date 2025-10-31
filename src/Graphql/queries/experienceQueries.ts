import { GraphQLID, GraphQLList } from "graphql";
import { experienceType } from "../types/experienceType";
import { requireAuth } from "../../../middlewares/authMiddleware";
import * as experienceController from "../../../controllers/experienceController";

export const experienceQueries = {
  getExperienceById: {
    type: experienceType,
    args: { id: { type: GraphQLID } },
    resolve: async (_: any, args: any, context: any) => {
      return experienceController.getExperience(args.id);
    },
  },

  getAllExperiences: {
    type: new GraphQLList(experienceType),
    resolve: async (_: any, __: any, context: any) => {
      return experienceController.getAllExperience();
    },
  },
};
