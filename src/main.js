import { createApp } from 'vue'
import App from './App.vue'
import { Cell, CellGroup } from 'vant';
import 'vant/lib/index.css';
import vueSlideUpToMore from './components/index'

const app = createApp(App)
app.use(Cell).use(CellGroup).use(vueSlideUpToMore).mount('#app')
