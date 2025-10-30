import * as AuthService from "../services/authService";


export async function login(email: string, password: string) {
    
    try {
        const token = await AuthService.login(email, password);
        return {token};
        
    } catch (error: any) {
        console.log({ error: error.message });
        return {
            error:error.message
        }
    }
}

export async function logout(req:any){
    try {
        
        let token=req.headers.authorization;
         return AuthService.logout(token) 
    } catch (error:any) {
        console.log({ error: error.message });
        return {
            error:error.message
        }
    }
    
}
