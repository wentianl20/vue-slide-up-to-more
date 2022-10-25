# vue-slide-up-to-more
### [中文说明](https://github.com/wentianl20/vue-slide-up-to-more/blob/master/README.zh-CN.md)

---

#### A H5 slide up for more items UI with bounce style based on Vant List, as shown below, 
![avatar](https://raw.githubusercontent.com/wiki/wentianl20/vue-slide-up-to-more/222_AdobeExpress.gif)

## Install

---

#### Using `npm` to install:

```
npm i vue-slide-up-to-more
```

### Quickstart

---

main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import PageList from 'vue-bounce-ui'
import 'vue-slide-up-to-more/lib/vue-slide-up-to-more.css'

const app = createApp(App)
app.use(PageList).mount('#app')
```


App.vue
```vue
<template>
  PageList Component

  <page-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="Not any more"
      loading-text="Loading..."
      @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </page-list>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  loading.value = true
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    loading.value = false;

    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```


### Properties/Events/Methods

---
#### finished-text
Promp shows when no more items to display. Default value is "没有更多了"
#### others
Please refer the [Vant UI](https://vant-ui.github.io/vant/#/en-US/list) for more details


### Browser Support

---

#### same as Vue 3 support list

### License

---

### [MIT](https://en.wikipedia.org/wiki/MIT_License)


