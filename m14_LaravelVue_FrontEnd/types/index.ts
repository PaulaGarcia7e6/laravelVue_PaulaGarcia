export interface LoginPayload {
    email:string;
    password:string
}
export interface RegisterPayload {
    "name": string,
    "email": string,
    "password": string,
    "password_confirmation":string
}
export interface User {
    id:	2,
    name:	string,
    email:	string,
    email_verified_at:	null,
    two_factor_secret:	null,
    two_factor_recovery_codes:	null,
    created_at:	string,
    updated_at:	string,
}
export interface Link {
    
}