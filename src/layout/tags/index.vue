<template>
  <div class="w-full h30 tags-view-wrapper">
    <template v-for="tag in tags" :key="tag.name">
      <div
        class="cursor-pointer tags-view-item"
        :class="route.path == tag.path ? 'active' : ''"
        @click="toTag(tag)"
        @contextmenu.prevent="openMenu($event, tag)"
      >
        <span>{{ tag.name }}</span>
        <el-icon class="el-icon-close" @click.prevent.stop="tagClose(CloseType['current'], tag)"
          ><Close
        /></el-icon>
      </div>
    </template>
    <ul
      class="contextmenu"
      ref="contextmenu"
      v-show="page.isShow"
      :style="{ left: page.left + 'px', top: page.top + 'px' }"
    >
      <li @click="tagClose(CloseType['current'])">关闭当前</li>
      <li @click="tagClose(CloseType['other'])">关闭其他</li>
      <li @click="tagClose(CloseType['left'])">关闭左侧</li>
      <li @click="tagClose(CloseType['right'])">关闭右侧</li>
      <li @click="tagClose(CloseType['all'])">关闭所有</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { CloseType, useTagsStore } from '@/stores'
import type { Tag } from '@/stores'
import { onClickOutside } from '@vueuse/core'

const contextmenu = ref(null)

onClickOutside(contextmenu, () => (page.isShow = false))

const page = reactive({
  isShow: false,
  top: 0,
  left: 0,
  index: 0
})

let curTag: Tag | undefined
const { tagsHandle, tags } = toRefs(useTagsStore())
const router = useRouter()
const route = useRoute()

const toTag = (tag: Tag) => router.push(tag.path)
const tagClose = (type: CloseType, tag?: Tag) => {
  tagsHandle.value.tagsClose(type, tag || curTag)
  curTag = undefined
  page.isShow = false
}

const openMenu = (e: MouseEvent, tag: Tag) => {
  page.isShow = true
  page.top = e.clientY
  page.left = e.clientX
  curTag = tag
}
</script>

<style lang="scss" scoped>
.tags-view-wrapper {
  border: 1px solid #f8f8f8;
  height: 30px;
  //line-height: 30px;
  background-color: #f8f8f8;
  padding: 0 20px;
  display: flex;

  .active {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    color: #409eff !important;
    background-color: #fff;
    padding: 0 10px;
    //border-bottom: 1px solid #f8f8f8;
  }
  .tags-view-item {
    color: #aaa;
    font-size: 14px;
    padding: 0 10px;
    text-decoration-line: none;
    display: flex;
    align-items: center;
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      margin-left: 8px;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
