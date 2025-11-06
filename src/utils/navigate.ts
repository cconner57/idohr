import { useRouter, type Router } from 'vue-router'

export function goToAdopt(router: Router, slug?: string) {
  return slug ? router.push({ name: 'adopt-pet', params: { slug } }) : router.push('/adopt')
}

export function goToDonate(router: Router) {
  return router.push('/donate')
}

export function createNavigator(router: Router) {
  return {
    goToAdopt: (slug?: string) => goToAdopt(router, slug),
    goToDonate: () => goToDonate(router),
  }
}

export function useNavigate() {
  const router = useRouter()
  return createNavigator(router)
}
