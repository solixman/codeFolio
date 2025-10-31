
import { GraphQLList, GraphQLID } from "graphql";
import * as skillController from "../../../controllers/skillController";
import { requireAuth } from "../../../middlewares/authMiddleware";
import { skillType } from "../types/skillType";

export const skillQueries = {
  getAllSkills: {
    type: new GraphQLList(skillType),
    resolve: async (_: any, __: any, context: any) => {
      
      return skillController.getAll();
    },
  },

  
  getSkillById: {
    type: skillType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (_: any, args: any, context: any) => {
      return skillController.getById(args.id);
    },
  },
};
