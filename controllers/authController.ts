import User from "../models/User";
import * as AuthService from "../services/authService";


export async function login(email: string, password: string) {

    try {

        const token = await AuthService.login(email, password);

        return {token};


    } catch (err:any) {
        console.log({ error: err.message });
        // res.status(400).json({ error: err.message });
    }

}