import User from "../models/User";

export async function login(email:string ,password:string){

let token = email+password;

return token;

}