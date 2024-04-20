<template>
  <div class="w-full h60 flex bg-blue-500">
    <div class="text-(center white nowrap 20) leading-60 p-x-20">
      沃享住<span class="font-bold p-x-4">·</span>国际版
    </div>
    <div class="f-c-c">
      <div class="border-(white r-solid r-1) h16"></div>
    </div>
    <el-container class="w-full flex justify-between items-center p-l-60">
      <el-menu
        class="grow menu"
        mode="horizontal"
        :default-active="route.path"
        background-color="rgb(59 130 246)"
        text-color="rgb(226 232 240)"
        active-text-color="white"
      >
        <template v-for="route in routes" :key="route.name">
          <el-menu-item class="!h59" :index="route.path">
            <router-link class="text-16" :to="route.path">{{ route.meta?.title }} </router-link>
          </el-menu-item>
        </template>
      </el-menu>
      <el-dropdown class="m-r-30">
        <span class="text-color-white f-c-c text-16">
          admin
          <i class="i-ep:arrow-down ml4"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="modifyPass">修改密码</el-dropdown-item>
            <el-dropdown-item @click="logout">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useRouterStore, useUserStore } from '@/stores'

const { routes } = toRefs(useRouterStore())

const route = useRoute()

const { logout, modifyPass } = useUserStore()
</script>

<style lang="scss" scoped>
.menu {
  border-bottom: none;
}
</style>
