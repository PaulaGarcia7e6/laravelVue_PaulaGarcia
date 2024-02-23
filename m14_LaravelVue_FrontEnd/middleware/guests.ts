export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user, initUser } = useAuth(); 
    //Dins l’arxiu guest.ts també fem una petició axios a /user, fes els canvis pertinents en aquest arxiu.
    await initUser();
    if (user.value) {
        return navigateTo("/me");
    }
});