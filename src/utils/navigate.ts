import { useRouter, type Router } from 'vue-router'

// Pattern 1 - explicit router parameter (pure, testable)
export function goToAdopt(router: Router) {
  return router.push('/adopt')
}

export function goToDonate(router: Router) {
  return router.push('/donate')
}

// Pattern 2 - factory that accepts a Router and returns helpers
export function createNavigator(router: Router) {
  return {
    goToAdopt: () => router.push('/adopt'),
    goToDonate: () => router.push('/donate'),
  }
}

// Pattern 3 - composition hook to use inside Vue setup()
export function useNavigate() {
  const router = useRouter()
  return createNavigator(router)
}
