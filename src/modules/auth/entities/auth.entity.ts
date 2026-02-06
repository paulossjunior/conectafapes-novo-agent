export type UserRole = 'bolsista' | 'voluntario' | 'coordenador';

export interface IUser {
    id: string;
    name: string;
    email: string;
    roles: UserRole[];
}

export interface IAuthResponse {
    token: string;
    refreshToken: string;
    user: IUser;
}

export interface ILoginRequest {
    email: string;
    password?: string;
}
