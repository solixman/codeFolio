import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const skillType = new GraphQLObjectType({
  name: "Skill",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    level: { type: GraphQLString },
    category: { type: GraphQLString },
    profile: { type: GraphQLString },
  }),
});
