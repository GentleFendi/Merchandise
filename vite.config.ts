import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command })=>{
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/Icons_SVG')],
                symbolId: 'icon-[dir]-[name]'
            }),
            viteMockServe({
                mockPath: 'mock',
                localEnabled: command === 'serve'
            })
        ],
        css: {
            preprocessorOptions: {
                less: {
                    math: 'always'
                }
            }
        },
        resolve: {
            alias: {
                "@": path.resolve('./src')
            }
        },
    }
})
