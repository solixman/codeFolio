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

export async function logout(req: any) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No token provided");
    }

    const token = authHeader.split(" ")[1]; // Extract actual token

    return await AuthService.logout(token);

  } catch (error: any) {
    console.log({ error: error.message });
    return { error: error.message };
  }
}


