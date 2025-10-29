import { GraphQLString } from "graphql";
import { userProfileType } from "../types/userProfileType";
import * as userController from "../../../controllers/userController"


export const profileMutaionFields = {

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
        resolve: async (_: any, args: any) => {
            return await userController.update(args);
        }
    }

}

