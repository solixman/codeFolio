import bcrypt  from 'bcrypt';
import User from "../models/User";
import blacklistedToken from "../models/BlacklistedToken"
import { create } from "../services/jwtService"

export async function login(email: string, password: string) {

    

    const user = await User.findOne({ email: email });

    if (!user) {
        throw new Error("there's no account with this email");
    }

    const isRight = await bcrypt.compare(password, user.password);
    if (!isRight) {
        throw new Error("wrong email or password, please try again");
    }

    const payload = {
        _id: user._id.toString(),
        email: user.email!,
        role: user.role!,
        name: user.userName!
    };

    let token = create(payload);

    return token
}

export async function logout(token:string){
try {

    let blt=new blacklistedToken();
    blt.token =token; 
    await blt.save() 
    return {message:"logged out succesfully"}

} catch (error) {
    console.log(error);
    throw error
}
}