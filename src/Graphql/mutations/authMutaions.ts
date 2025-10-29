import { authType } from './../types/authType';
import { GraphQLString } from "graphql"
import { login } from "../../../controllers/authController"


export const authMutationFields = {

    login: {
        type: authType,
        args: {
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        },
resolve: async (_:any, args:any) => {
  return await login(args.email, args.password);
}    }
}
