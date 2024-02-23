import {FormKitNode} from "@formkit/core";
import { AxiosError } from "axios";

export function InvalidForm(err:any,node?:FormKitNode) {
    if(err instanceof AxiosError && err.response?.status === 422) {
        node?.setErrors([], err.response.data.errors);
    }
}

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
    email: string;
    email_verified_at?: Date;
    id: number;
    name: string;
    two_factor_confirmed_at?: Date;
    two_factor_recovery_codes?: number;
    two_factor_secret?: string;
    updated_at: Date;
    created_at: Date;
}
export interface Link {
    updated_at: Date;
    created_at: Date;
    short_link:string;
    full_link:string;
    user_id:number;
    views: number;
}
export interface ErrorResponse {
    message:string;
    errors: Record<string,string[]>
}
export interface PaginatedResponse<T> {
    current_page:number;
    data:T[];
    first_page_url:string | null;
    from:number;
    last_page:number;
    last_page_url: string|null;
    links: {
        url:string|null;
        label:string;
        active:boolean;
    }[];
    next_page_url:string|null;
    path:string;
    per_page:number;
    prev_page_url:string|null;
    to:number;
    total: number;
}