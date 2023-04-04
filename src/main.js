import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import components from './components/UI';

const app = createApp(App).use(router)
components.forEach(component => {
  return app.component(component.name, component)
})

app.use(router).mount('#app')
