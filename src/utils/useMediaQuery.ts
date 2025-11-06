import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(false)
  let mediaQuery: MediaQueryList

  const updateMatch = (mediaQueryEvent: MediaQueryListEvent | MediaQueryList) => {
    matches.value = mediaQueryEvent.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches

    mediaQuery.addEventListener('change', updateMatch)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', updateMatch)
  })

  return matches
}
