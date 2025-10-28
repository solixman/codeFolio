import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionConfig from '../config/session';
import '../config/DB';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import {login} from '../controllers/authController';

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(session(sessionConfig));
app.use(express.json());
app.use(cookieParser());

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello GraphQL 👋'
    }
  }
});



const authType= new GraphQLObjectType({
    name:'auth',
    fields:{
        token:{ type: GraphQLString },
    }
})


const rootMutation=new GraphQLObjectType({
    name:'Mutation',
    fields:{
        login:{
            type: authType,
            args:{
                email:{ type: GraphQLString },
                password:{ type: GraphQLString }
            },
            resolve:(_, args) => login(args.email,args.password)
        }
    }
});


const schema = new GraphQLSchema({
  query: RootQuery,
  mutation:rootMutation
});


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, 
}));




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));