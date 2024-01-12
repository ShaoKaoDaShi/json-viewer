<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { parseStringToObj } from './utils/json/parseJson'

const textAreaChange = (e: FocusEvent) => {
  const textAreaElement = e.target as HTMLTextAreaElement
  let value = textAreaElement.value.trim()
  if (value.startsWith('"') || value.endsWith('"')) {
    value = textAreaElement.value
      .trim()
      .replace(/^["']/g, '')
      .replace(/["']$/g, '')
      .replace(/(\\{1,}")/g, (a, b, c) => {
        function createStr(number: number) {
          return Array(number).fill('\\').join('')
        }
        const returnStr = createStr(Math.floor(a.length / 2))
        return returnStr + '"'
      })
  }
  // console.log("🚀 ~ textAreaChange ~ value:", value)

  const result = parseStringToObj(value)
  console.log('🚀 ~ textAreaChange ~ result:', result)
  // console.log(JSON.parse(value))
}
</script>

<template>
  <h1 class="text-2xl mb-5 text-white bg-indigo-500 rounded p-1 pl-4">递归 parseJson</h1>
  <textarea
    @blur="textAreaChange"
    class="w-full border-2 border-blue-700 rounded p-2 min-h-96"
  ></textarea>
</template>

<style scoped></style>
