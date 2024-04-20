<template>
  <el-config-provider :locale="useLangStore().eleI18n">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLangStore } from '@/stores'
</script>
<style scoped></style>
