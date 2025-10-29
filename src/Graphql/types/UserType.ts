import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { profileType } from "./profieType";

export const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
  },
});
