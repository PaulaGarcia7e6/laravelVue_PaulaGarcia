import axios, {AxiosError} from "axios"
import { Ref } from "vue";
import { useAuth } from "~~/composables/useAuth"
interface User {
    name:	string,
    email:	string,
}
const auth = useAuth()
// Referencia reactiva vacía para el usuario
export const currentUser = ref<User | null>(null);

export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        // Inicializar el usuario
        await auth.initUser();

        // Obtener el usuario actualizado
        const user = await auth.getUser();

        // Desestructurar el usuario
        if (user) {
            const { name, email } = user;
            console.log("Nombre de usuario:", name);
            console.log("Email del usuario:", email);
        } else {
            // Redirigir a la página de inicio de sesión si el usuario no está definido
            navigateTo('/login');
        }
    } catch (error) {
        // Manejar errores de Axios (por ejemplo, falta de autorización)
        if (error instanceof AxiosError && error.response?.status === 401) {
            navigateTo('/login');
        } else {
            console.error("Error al obtener el usuario:", error);
        }
    }
});


