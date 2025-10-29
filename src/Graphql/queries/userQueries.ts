import { userProfileType } from "../types/userProfileType";
import * as userController from "../../../controllers/userController"


export const userQueryFields = {
    get_user: {
        type: userProfileType,
        resolve: async ()=>{
        return await userController.getUser();
        }
    },
}