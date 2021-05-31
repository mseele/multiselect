import { ref, toRefs, computed } from 'composition-api'

export default function useMultiselect (props, context, dep)
{
  const { searchable, id } = toRefs(props)

  // ============ DEPENDENCIES ============

  const openDropdown = dep.openDropdown;

  // ================ DATA ================

  const multiselect = ref(null)

  // ============== COMPUTED ==============

  const tabindex = computed(() => {
    return searchable.value ? -1 : 0
  })

  // =============== METHODS ==============

  const focusInput = () => {
    multiselect.value.querySelector('.multiselect-input').focus()
  }

  const blurInput = () => {
    multiselect.value.querySelector('.multiselect-input').blur()
  }

  // workaround for https://github.com/vueform/multiselect/issues/75
  const onFocus = (event) => {
    if (typeof event.relatedTarget === "undefined") {
      return;
    }
    openDropdown()
  }

  return {
    multiselect,
    tabindex,
    focusInput,
    blurInput,
    onFocus,
  }
}