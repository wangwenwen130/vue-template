<script lang="tsx">
import { ElButton } from 'element-plus'
export default defineComponent({
  name: 'loadWrap',
  props: {
    handle: {
      type: Function as PropType<() => Promise<unknown>>
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadText: {
      type: String,
      default: '' // 正在加载中！！！
    },
    btnText: {
      type: String
    },
    spinner: {
      type: String as PropType<'Loading' | 'RefreshRight'>,
      default: 'Loading'
    },
    duration: {
      type: String,
      default: '3s'
    }
  },
  setup(props, ctx) {
    const loading = ref(props.loading)

    const handle = () => {
      loading.value = true
      Promise.resolve()
        .then(() => {
          return props.handle?.()
        })
        .finally(() => {
          loading.value = false
        })
    }

    watch(
      () => props.loading,
      (val) => {
        loading.value = val
      }
    )

    const getProps = () => {
      const data = { ...props }
      // @ts-ignore
      delete data.loading
      delete data.handle
      return data
    }
    if (ctx.slots.default) {
      const def = () => (
        <div>
          {{
            default: () => ctx.slots.default?.()
          }}
        </div>
      )
      const mask = () => (
        <div class="load-wrap-mask flex-column-center">
          <el-icon class="icon-loading" size="50" style={{ 'animation-duration': props.duration }}>
            {props.spinner === 'Loading' ? (
              <Loading color="#2d77fe" />
            ) : (
              <RefreshRight color="#2d77fe" />
            )}
          </el-icon>
          <span style="margin-top: 10px">{props.loadText}</span>
        </div>
      )
      const wrap = () => (
        <div onClick={props.handle ? handle : () => {}} {...getProps()} class="load-wrap">
          {loading.value ? (
            <>
              {def()} {mask()}
            </>
          ) : (
            <>{def()}</>
          )}
        </div>
      )
      return () => wrap()
    } else {
      return () => (
        <ElButton
          {...getProps()}
          onClick={props.handle ? handle : () => {}}
          loading={loading.value}
        >
          {props.btnText}
        </ElButton>
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.load-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  .load-wrap-mask {
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    .load-wrap-mask-icon {
      height: 50%;
      width: 50%;
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg); /* 每次旋转360度，回到初始状态 */
    }
  }
  .icon-loading {
    animation: spin infinite linear;
    animation-duration: 1.3s;
    transform-origin: center;
  }
}
</style>
