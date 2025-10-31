import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";



export const createSkillType = new GraphQLObjectType({
    name:"skillCreated",
    fields:{
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        level: { type: GraphQLString },
        category: { type: GraphQLString },
        profile: { type: GraphQLString },
        message:{type:GraphQLString}
    }
})