<template>
  <List
      :loading="loading"
      :error="error"
      :finished="finished"
      :error-text="errorText"
      @load="load"
      :offset="offset"
      :loading-text="loadingText"
      :immediate-check="immediateCheck"
      :direction="direction"
      @mousedown="startDrag"
      @touchstart="startDrag"
      @mousemove="onDrag"
      @touchmove="onDrag"
      @mouseup="stopDrag"
      @touchend="stopDrag"
      @mouseleave="stopDrag"
  >
    <template v-slot:finished>
      <div class="blank" id="blank">{{ finishedText }}</div>
    </template>
    <slot></slot>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List } from 'vant'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  finished: {
    type: Boolean,
    default: false
  },
  finishedText: {
    type: String,
    default: '没有更多了',
  },
  load: {
    type: Function,
    default: () => {

    }
  },
  loadingText: {
    type: String,
    default: '加载中...',
  },
  errorText: {
    type: String,
    default: '',
  },
  offset: {
    type: [Number, String],
    default: 300,
  },
  immediateCheck: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: 'down',
  },
})

// 滑动起始点高度
const dragStartY = ref(0)

function onDrag(e) {
  // 当已经加载全部拍品 && 长度超过一屏触发逻辑
  if (
      props.finished &&
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight
  ) {
    e = e.changedTouches ? e.changedTouches[0] : e
    const blank = document.querySelector('.blank')
    if (blank.offsetHeight < parseFloat(dragStartY.value - e.clientY)) {
      // console.log('滚动大于上次赋值')
      blank.style.height = parseFloat(dragStartY.value - e.clientY) + 'px'
    }
  }
}

function startDrag(e) {
  // 当已经加载全部拍品 && 长度超过一屏触发逻辑
  if (
      props.finished &&
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight
  ) {
    e = e.changedTouches ? e.changedTouches[0] : e
    dragStartY.value = e.clientY
  }
}

function stopDrag() {
  // 当已经加载全部拍品 && 长度超过一屏触发逻辑
  if (
      props.finished &&
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight
  ) {
    const blank = document.querySelector('.blank')
    blank.style.height = 0
  }
}

</script>

<style>
  .blank {
    height: 0;
    overflow: hidden;
  }
</style>
