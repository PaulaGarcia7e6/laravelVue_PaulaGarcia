import axios from "axios";
import { currentUser } from "~~/middleware/auth";
interface LoginPayload {
    email:string;
    password:string
}
interface RegisterPayload {
    "name": string,
    "email": string,
    "password": string,
    "password_confirmation":string
}
interface User {
    id:	2,
    name:	string,
    email:	string,
    email_verified_at:	null,
    two_factor_secret:	null,
    two_factor_recovery_codes:	null,
    created_at:	string,
    updated_at:	string,
}
export const useAuth=() => {
    //desar l'usuari connectat
    async function  login(payload:LoginPayload) {
        await axios.post("/login",payload)
        useRouter().push("/me")
    }
    async function register(payload:RegisterPayload) {
        const post = await axios.post('/register',payload )
        console.log('se han registrado estos datos',post)
        useRouter().push('/login');
    }
    async function logout() {
        await axios.post('/logout');
        console.log('test')
        useRouter().replace('/login');
        // Eliminar datos
        const user = null;
        return user; 
    }
    async function getUser(): Promise<User | null> {
        try {
            const res= await axios.get("/user");
            const user = res.data;
            return  {
                ... user,
                created_at: new Date(user.created_at),
                updated_at: new Date(user.updated_at),
                email_verified_at: user.email_verified_at
                    ? new Date(user.email_verified_at)
                    : null,
                two_factor_confirmed_at: user.two_factor_confirmed_at
                    ? new Date(user.two_factor_confirmed_at)
                    : null,
            };
        } catch(err) {
            return null
        }
    }
    async function initUser() {
        await getUser();
    }
    return {
        login,
        register,
        logout,
        getUser,
        initUser
    }
}