import { GraphQLObjectType } from "graphql";
import { userType } from "./UserType";
import { profileType } from "./profieType";


export const userProfileType = new GraphQLObjectType({
    name: "UserProfile",
    fields: {
        user: { type: userType },
        profile: { type: profileType },
    },
});
