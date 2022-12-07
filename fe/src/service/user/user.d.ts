export interface LoginInputs {
    username: string;
    password: String;
    idenity?: Number | String;
    token?: String;
}

export interface RegisterInputs {
    username?: string;
    email: String;
    password: String;
    repassword?: String;
}
