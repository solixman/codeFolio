import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const profileType = new GraphQLObjectType({
    name: "Profile",
    fields: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        bio: { type: GraphQLString },
        title: { type: GraphQLString },
        phone: { type: GraphQLString },
        pfp: { type: GraphQLString },
        location: { type: GraphQLString },
    },
});
