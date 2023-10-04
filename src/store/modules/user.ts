import { defineStore } from 'pinia'
import {reqLogin} from '@/api'
import type {loginType} from '@/api/indexType.ts'
import {loginResponseData} from '@/api/indexType.ts'
import {UserState} from '@/store/types/type.ts'

let useUserStore = defineStore('User',{
    state:():UserState=>{
        return {
            token: localStorage.getItem("TOKEN")
        }
    },
    actions: {
        async userLogin(data: loginType){
            let result: loginResponseData = await reqLogin(data)
            if (result.code === 200) {
                this.token = (result.data.token as string)
                localStorage.setItem("TOKEN", (result.data.token as string))
                return 'ok'
            }else {
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {
    }
})

export default useUserStore
