import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ui from '@nuxt/ui/vue-plugin'
import { registerGlobalComponents } from './globalComponents'
import router from '@/common/router'
import { i18n } from '@/common/plugins/i18n'

const app = createApp(App)

app.use(ui)
app.use(i18n)
app.use(router)
registerGlobalComponents(app)

app.mount('#app')
