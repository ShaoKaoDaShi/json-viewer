<script setup lang="ts">
import { ref } from 'vue'
import ShowJson from './ShowJson.vue'
import store from '../../stores/jsonStore'
console.log(store)
const target = ref(store.json)
console.log(target.value)
</script>

<template>
  <div class="h-screen bg-slate-800 text-sky-300">
  <ShowJson :target="target" />
</div>
</template>
