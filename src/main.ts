import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupStyles } from './styles';

async function setupApp() {
  
  setupStyles();

  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  // mount app
  app.mount('#app');
}

setupApp();
