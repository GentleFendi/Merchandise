import IconsSVG from '@/components/IconsSVG/index.vue'
const allGlobalComponent = { IconsSVG }

export default {
    install(app: {}): void{
        Object.keys(allGlobalComponent).forEach(key=>{
            // @ts-ignore
            app.component(key, allGlobalComponent[key])
            // TODO: 待解决的 TS 类型警告
        })
    }
}
