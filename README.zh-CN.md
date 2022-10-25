# vue-slide-up-to-more

---

#### 基于vant的List实现的在H5下拉加载更多的弹簧橡皮筋效果，如下图
![avatar](https://raw.githubusercontent.com/wiki/wentianl20/vue-slide-up-to-more/222_AdobeExpress.gif)

## 安装

---

#### 通过 `npm` 安装:

```
npm i vue-bounce-ui
```

### 快速上手

---

main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import PageList from 'vue-slide-up-to-more'
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

### 属性说明

---

#### finished-text
加载完成后的提示文案, 默认值 "没有更多了"
#### others
其他和Vant3的List一致，请参考 [Vant UI](https://vant-ui.github.io/vant/#/zh-CN/list)


### 浏览器支持

---

#### 与Vue3.0 一致

### 开源协议

---

#### 本项目基于 [MIT](https://en.wikipedia.org/wiki/MIT_License) 协议，请自由地享受和参与开源。




