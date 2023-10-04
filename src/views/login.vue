<template>
    <section>
        <div class="box">
            <h1>Welcome in</h1>
            <el-form :model="loginFrom" :rules="rules" ref="loginFroms">
                <el-form-item prop="username">
                    <el-input v-model="loginFrom.username" type="text" autocomplete="off"/>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginFrom.password" show-password type="password" autocomplete="off"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">Submit</el-button>
                </el-form-item>
            </el-form>
        </div>
    </section>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import useUserStore from '@/store/modules/user.ts'
import { ElMessage } from 'element-plus'
import {useRouter} from 'vue-router'
let $router = useRouter()
let useStore = useUserStore()

let loginFrom = reactive({username: 'Fendi', password: '111111'})

// -- 表单校验 Start
let loginFroms = ref()
// @ts-ignore
const validatorUserNameNull = (rule: any, value: any, callback: any)=>{
    if (value=='') callback(new Error('密码不能为空！'))
    else callback()
}
// @ts-ignore
const validatorUserName = (rule: any, value: any, callback: any)=>{
    const numRegex = /^.{6,12}$/
    const strRegex = /^[a-zA-Z0-9]*$/
    if (!strRegex.test(value)) callback(new Error('密码不能含有特殊字符或空格！'))
    if (!numRegex.test(value)) callback(new Error('密码长度位6~12位！'))
    else callback()
}
const rules = {
    username: [
        { required: true, message: '用户名不能为空！', trigger: 'blur' },
        { required: true, min: 2, max: 10, message: '用户名长度至少2~10位', trigger: 'change' },
    ],
    password: [
        { validator: validatorUserNameNull, trigger: 'blur' },
        { validator: validatorUserName, trigger: 'change', },
    ]
}
// -- 表单校验 End
const login = async ()=>{
    await loginFroms.value.validate()
    try {
        await useStore.userLogin(loginFrom)
        ElMessage({
            message: getTime(),
            type: 'success',
        })
        await $router.push('/')
    } catch (error){
        ElMessage({
            message: (error as Error).message,
            type: 'error',
        })
    }
}
const getTime = ()=>{
    let message:string = '登陆成功！'
    let hours = new Date().getHours()
    if (hours<=9) {
        message = '登陆成功，早上好！'
        return message
    }
    else if (hours<=12) {
        message = '登陆成功，上午好！'
        return message
    }
    else if (hours<=18) {
        message = '登陆成功，下午好！'
        return message
    }
    else {
        message = '登录成功，晚上好！'
        return message
    }
}
</script>

<style lang="less" scoped>
section {
    position: relative;
    width: 100%; height: 100vh;
    background: url(@/assets/images/martin-martz-TqxdgoAbX10-unsplash.jpg) no-repeat;
    background-size: 100% 100%;
    color: #FFF;
    div.box {
        padding: 20px;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 20%;
        background-color: #5753c4;
        border-radius: 15px;
        h1 {
            padding: 10px 0;
        }
        .el-form-item {
            margin: 20px 0;
        }
        .el-button {
            width: 100%;
        }
    }
}
</style>
