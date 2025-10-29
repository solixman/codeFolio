import jwt  from 'jsonwebtoken';
import User  from '../models/User';
import dotenv from "dotenv";
import UserPayload from '../interfaces/UserPayload';
dotenv.config();



export function create(user:UserPayload) {
        try {
            const accessToken = jwt.sign({
                id: user._id,
                email: user.email,
                role: user.role,
                name:user.name
            }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '30m' });

            return accessToken ;
        } catch (err) {
            console.log(err);
            throw new Error("something went wrong, please try again later");
        }
    }