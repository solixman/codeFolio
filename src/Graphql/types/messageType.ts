import { GraphQLObjectType, GraphQLString } from "graphql";



export const messageType = new GraphQLObjectType({
  name: 'Message',
  fields: {
    message: { type: GraphQLString }
  }
});
