<template>
  <el-container direction="vertical" class="w-screen h-screen">
    <TopHeader />
    <el-container>
      <SideBar />
      <el-container direction="vertical">
        <Tags />
        <el-main>
          <MainContent />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import MainContent from './main-content/index.vue'
import TopHeader from './top-header/index.vue'
import SideBar from './side-bar/index.vue'
import Tags from './tags/index.vue'
import { useTagsStore, useRouterStore } from '@/stores'

const { tagsHandle } = useTagsStore()
const route = useRoute()

watch(
  () => route.path,
  () => {
    useRouterStore().updateChild()
    if (!tagsHandle.has()) {
      if (!route.name) return console.warn('please set router name')
      tagsHandle.push({
        name: (route.meta?.title as string) || (route.name as string),
        path: route.path
      })
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped></style>
