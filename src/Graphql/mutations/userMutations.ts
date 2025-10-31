import { GraphQLString } from "graphql";
import { userProfileType } from "../types/userProfileType";
import * as userController from "../../../controllers/userController"
import { requireAuth } from "../../../middlewares/authMiddleware";
import { Context } from "vm";


export const userMutaionFields = {
    update: {
        type: userProfileType,
        args: {
            id: { type: GraphQLString },
            userName: { type: GraphQLString },
            email: { type: GraphQLString },
            role: { type: GraphQLString },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            bio: { type: GraphQLString },
            title: { type: GraphQLString },
            phone: { type: GraphQLString },
            pfp: { type: GraphQLString },
            location: { type: GraphQLString },
        },
        resolve: async (_: any, args: any,context:Context) => {
            await requireAuth(context.req);
            return await userController.update(args);
        },
    }
}

