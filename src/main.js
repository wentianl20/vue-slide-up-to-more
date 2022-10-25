import { createApp } from 'vue'
import App from './App.vue'
import { Cell, CellGroup } from 'vant';
import 'vant/lib/index.css';
// import vueSlideUpToMore from './components/index'
import PageList from 'vue-slide-up-to-more'
import 'vue-slide-up-to-more/lib/vue-slide-up-to-more.css'

const app = createApp(App)
app.use(Cell).use(CellGroup).use(PageList).mount('#app')
