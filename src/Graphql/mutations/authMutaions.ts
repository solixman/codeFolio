import { authType } from './../types/authType';
import { GraphQLString } from "graphql"
import { login,logout } from "../../../controllers/authController"
import {messageType} from "./../types/messageType"
import {requireAuth} from "../../../middlewares/authMiddleware";
import { Context } from 'vm';


export const authMutationFields = {
    login: {
        type: authType,
        args: {
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        },
        resolve: async (_: any, args: Context) => {
            return await login(args.email, args.password);
        }
    },
    logout: {
      type:messageType,
      resolve: async (_: any,__:any,context:Context)=>{
        await requireAuth(context.req);
        return await logout(context.req)
    }
    }
}
