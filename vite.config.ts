import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path';

export default defineConfig((configEnv) => {
  return {
    resolve: {
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
        vue(),
        AutoImport({
          imports: [
            'vue',
            {
              'naive-ui': [
                'useDialog',
                'useMessage',
                'useNotification',
                'useLoadingBar'
              ]
            }
          ]
        }),
        Components({
          resolvers: [NaiveUiResolver()]
        })
      ],
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true,
    },
  };
});
