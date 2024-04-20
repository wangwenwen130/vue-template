<template>
  <div class="w-full h-full relative">
    <RouterView v-slot="{ Component, route }">
      <component :is="Component" :key="route.name" />
    </RouterView>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
