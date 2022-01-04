import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import pkg from '../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${pkg.name}/`,
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          // componentPrefix: "",
          // enabledCollections: ['carbon']
        }),
      ],

      dts: 'src/components.d.ts',
    }),

    WindiCSS(),

    VitePWA({
      manifest: {
        icons: [
          {
            src: '/img/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      'char-dust': path.resolve(__dirname, '../src/index.ts'),
    },
  },
  optimizeDeps: {
    exclude: ['canvas'],
  },
})
