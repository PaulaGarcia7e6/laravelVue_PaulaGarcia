import axios, {AxiosError} from "axios";
import { useAuth } from '~~/composables/useAuth'; 

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { getUser } = useAuth(); 
    //Dins l’arxiu guest.ts també fem una petició axios a /user, fes els canvis pertinents en aquest arxiu.
    try {
        const user = await getUser();

        if (user) {
            return navigateTo("/me");
        }
    } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
    }
});