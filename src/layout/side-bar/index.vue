<template>
  <div class="h-full pt10 w180 shadow-xl border-(1 solid right color-gray-200)">
    <el-menu :default-active="route.path">
      <template v-for="route in useRouterStore().children" :key="route.label">
        <el-menu-item :index="route.path">
          <router-link class="text-16" :to="route.path">{{ route.label }} </router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useRouterStore } from '@/stores'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
