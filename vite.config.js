import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Element plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 图片打包输出插件
// import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
    // 图片打包输出
    // copy({
    //   patterns: [
    //     { from: 'src/assets', to: 'dist/img' } // 配置图片文件的源路径和目标路径
    //   ]
    // })
  ],
  base: './',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 800 * 1024, // 设置打包后模块大小为800kb
    rollupOptions: {
      output: {
        // manualChunks: (id) => {
        //   if (id.endsWith('.css')) {
        //     return 'css'
        //   } else if (id.endsWith('.js')) {
        //     return 'js'
        //   } else if (/\.(png|jpe?g|gif|svg|ico)(\?.*)?$/.test(id)) {
        //     return 'img'
        //   }
        // }

        entryFileNames: 'js/[name].[hash].js', // 配置输出的js文件路径和名称
        // chunkFileNames: 'img/[name].[hash].js', // 配置输出的chunk js文件路径和名称
        assetFileNames: 'css/[name].[ext]' // 配置输出的css文件路径和名称
      }
    }
    // assetsDir: 'assets' // 配置输出的图片文件路径
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
