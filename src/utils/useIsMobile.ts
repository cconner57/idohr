import { useMediaQuery } from './useMediaQuery.ts'

export function useIsMobile() {
  return useMediaQuery('(max-width: 440px)')
}
