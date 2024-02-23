// Referencia reactiva vacía para el usuario

export default defineNuxtRouteMiddleware(async (to, from) => {
    const {user,initUser} = useAuth()
    await initUser();
    if(!user.value) {
        return navigateTo("/login")
    }
});


