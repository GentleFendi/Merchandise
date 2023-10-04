import request from '@/utils/request.ts'
import type { loginType, loginResponseData, userInfoResponseData } from '@/api/indexType.ts'
enum API{
    LOGIN_URL= '/user/login',
    USERINFO_UR = '/user/info'
}
export const reqLogin = (data: loginType) => request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO_UR)
