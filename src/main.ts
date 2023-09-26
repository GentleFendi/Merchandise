import { createApp } from 'vue'
import './commonStyle.css'
import 'virtual:svg-icons-register'
import App from './App.vue'
import allGlobalComponent from '@/components/index.ts'
import router from '@/router'

const app = createApp(App)
app.use(allGlobalComponent)
app.use(router)

app.mount('#app')
