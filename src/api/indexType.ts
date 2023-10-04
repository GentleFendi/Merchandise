// ------ /user/login ------
export interface loginType {
    username: string,
    password: string
}
export interface loginResponseData {
    code: number,
    data: {
        token?: string,
        message?: string
    }
}
// ------ /user/login ------
// ------ /user/info ------
interface userInfo {
    userID: number,
    avatar: string,
    userName: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}
export interface userInfoResponseData {
    code: number,
    data: {
        checkUser: userInfo
    }
}
// ------ /user/info ------
