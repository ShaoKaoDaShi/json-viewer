<script setup lang="ts">

</script>

<template>
  <div class=" p-4">
  <header>
    <div class=" cursor-pointer  mb-4 rounded text-white p-2  pl-3 text-2xl " >
      <RouterLink to="/" class=" mr-4 bg-blue-600 p-1 rounded hover:bg-blue-800">输入</RouterLink>
      <RouterLink to="/about" class=" bg-blue-600 p-1 rounded hover:bg-blue-800">展示</RouterLink>
    </div>
  </header>

    <RouterView />
  </div>

</template>

<style scoped></style>
