import {  GraphQLObjectType, GraphQLString } from 'graphql';


export const authType= new GraphQLObjectType({
    name:'auth',
    fields:{
        token:{ type: GraphQLString },
    }
})