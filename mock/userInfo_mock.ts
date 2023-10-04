interface userList {
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
function createUserList(): userList[]{
    return [
        {
            userID: 1,
            avatar: '/asd/efd/sc/3333.jpg',
            userName: 'Fendi',
            password: '111111',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token'
        },
        {
            userID: 2,
            avatar: '/asd/efd/sc/2222.jpg',
            userName: 'admin',
            password: '666666',
            desc: '平台成员',
            roles: ['平台成员'],
            buttons: ['user.detail'],
            routes: ['home'],
            token: 'user Token'
        }
    ]
}

export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body })=>{
            const { username, password } = body
            const checkUser: userList = createUserList().find(
                (item: userList)=>item.userName === username && item.password === password
            )
            if (!checkUser){
                return { code: 201, data: { message: "账户密码不正确！！" } }
            }
            const {token}  = checkUser
            return { code: 200, data: {token} }
        }
    },
    {
        url: '/api/user/info',
        method: 'get',
        response: (request)=>{
            const token = request.headers.token
            const checkUser = createUserList().find((item)=>item.token === token)
            if (!checkUser) return { code: 201, data: { message: "获取用户信息失败" } }
            return { code: 200, data: { checkUser } }
        }
    }
]
