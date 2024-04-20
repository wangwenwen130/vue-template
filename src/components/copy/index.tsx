import { useClipboard } from '@vueuse/core'

export default defineComponent({
  props: {
    icon: {
      type: String,
      default: 'i-ep:document-copy'
    },
    text: {
      type: String,
      default: ''
    },
    isTip: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const { copy, copied } = useClipboard({
      source: props.text
    })

    const hasSlot = !!slots.default
    const hasIconSlot = !!slots.icon
    const rendIcon = () => (hasIconSlot ? <>{slots.icon?.()}</> : <i class={props.icon}></i>)

    watch(
      () => copied.value,
      (val) => {
        val && props.isTip && ElMessage.success('复制成功')
      }
    )

    return () => (
      <span class="f-c-c flex-inline cursor-pointer" onClick={() => copy()}>
        {rendIcon()}
        {hasSlot ? <span class="ml4">{slots.default?.()}</span> : null}
      </span>
    )
  }
})
