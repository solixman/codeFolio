import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionConfig from './config/session';
import './config/DB';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { authMutationFields } from './Graphql/mutations/authMutaions';
import { profileMutaionFields } from './Graphql/mutations/ProfileMutations';

dotenv.config();

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




const rootMutation=new GraphQLObjectType({
    name:'Mutation',
    fields:{
        ...authMutationFields,
        ...profileMutaionFields,
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