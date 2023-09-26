import axios from 'axios'
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})
request.interceptors.request.use((config)=>{
    return config
})
request.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (error)=>{
        let message = ''
        let status = error.response.status
        switch (status){
            case 401:
                message = 'Token 过期'
                break
            case 403:
                message = '您没有访问权限，无权访问'
                break
            case 404:
                message = '请求地址错误'
                break
            case 500:
                message = '服务器错误'
                break
            default:
                message = '网络问题'
                break
        }
        return Promise.reject(error)
    }
)
export default request
