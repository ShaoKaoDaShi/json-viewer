<script setup lang="ts">
import { ref } from 'vue';
import className from '../../utils/className'
const props = defineProps(['target'])
console.log('🚀 ~ props:', props)
const collapsed = ref(false)
const handleCollapsedChange = () => {
  collapsed.value = !collapsed.value
  console.log(collapsed.value)
}
// const target = ref(store.json)
console.log()
</script>

<template>
  <div class="bg-slate-800 text-sky-300 pl-4" :class="className({'h-0':collapsed})">
    <div class="border-l" v-if="Array.isArray(target)" :onclick="handleCollapsedChange">
      [
      <div class="pl-4" v-for="(item, index) in target" :key="index">
        <!-- <span> -->
        <ShowJson v-if="typeof item === 'object' && item !== null" :target="item" />
        <!-- </span> -->
        <span v-else>{{ item }}</span>
      </div>
      ]
    </div>
    <div class="border-l" v-else-if="typeof target === 'object' && target !== null" :onclick="handleCollapsedChange">
      {
      <div class="pl-4" v-for="(value, key) in target" :key="key">
        {{ key }} :

        <ShowJson v-if="typeof value === 'object' && value !== null" :target="value" />

        <span v-else>{{ value }}</span>
      </div>
      }
    </div>
    <div v-else>
      <div>{{ target }}</div>
    </div>
  </div>
</template>
