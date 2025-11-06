import { ref, onMounted, onUnmounted } from 'vue'

export function useMediaQuery(query: string) {
  const matches = ref(false)
  let mediaQuery: MediaQueryList | undefined

  const updateMatch = (e: MediaQueryListEvent | MediaQueryList) => {
    matches.value = e.matches
  }

  onMounted(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return

    mediaQuery = window.matchMedia(query)
    matches.value = mediaQuery.matches

    mediaQuery.addEventListener('change', updateMatch)
  })

  onUnmounted(() => {
    if (mediaQuery) {
      mediaQuery.removeEventListener('change', updateMatch)
    }
  })

  return matches
}
