import { GraphQLObjectType, GraphQLString } from "graphql";
import { title } from "process";


export const projectType = new GraphQLObjectType({
    name:"project",
    fields:{
        id:{type:GraphQLString},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        demoLink:{type:GraphQLString},
        image:{type:GraphQLString},
    }
})