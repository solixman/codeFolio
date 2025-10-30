import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import sessionConfig from './config/session';
import './config/DB';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { authMutationFields } from './Graphql/mutations/authMutaions';
import { userMutaionFields } from './Graphql/mutations/userMutations';
import { userQueryFields } from './Graphql/queries/userQueries';

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(express.json());
app.use(cookieParser());


const RootQuery = new GraphQLObjectType({

  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello GraphQL 👋'
    },
    ...userQueryFields
  }
});

const rootMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...authMutationFields,
        ...userMutaionFields,
    }
});


const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: rootMutation
});


app.use(
    '/graphql',
    graphqlHTTP((req, res) => ({
        schema,
        graphiql: true,
        context: { req, res },
    })
))




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));