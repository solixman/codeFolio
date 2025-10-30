import { GraphQLObjectType, GraphQLString } from "graphql";
import { title } from "process";


export const projetcType = new GraphQLObjectType({
    name:"project",
    fields:{
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        demoLink:{type:GraphQLString},
        image:{type:GraphQLString},
    }
})