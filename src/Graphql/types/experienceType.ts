import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const experienceType = new GraphQLObjectType({
  name: "Experience",
  fields: () => ({
    id: { type: GraphQLID },
    role: { type: GraphQLString },
    company: { type: GraphQLString },
    city: { type: GraphQLString },
    description: { type: GraphQLString },
    startDate: { type: GraphQLString }, 
    endDate: { type: GraphQLString },
    profile: { type: GraphQLID },
  }),
});
