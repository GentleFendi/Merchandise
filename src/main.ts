import { createApp } from 'vue'
import './commonStyle.css'
import 'virtual:svg-icons-register'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import allGlobalComponent from '@/components/index.ts'
import router from '@/router'
import pinia from '@/store/index.ts'


const app = createApp(App)
app.use(ElementPlus)
app.use(allGlobalComponent)
app.use(router)
app.use(pinia)

app.mount('#app')
