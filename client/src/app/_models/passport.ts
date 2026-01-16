export interface Passport {
    token_type:string,
    access_token:string,
    expires_in:number,
    display_name:string,
    arvatar_url?:string
}

export interface LoginModel {
    username: string;
    password: string;
}

export interface RegisterModel { 
    username: string;
    password: string;
}