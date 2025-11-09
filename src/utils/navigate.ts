import { useRouter, type Router } from 'vue-router'

export function goToAdopt(router: Router, id?: string) {
  return id ? router.push({ name: 'adopt-pet', params: { id } }) : router.push('/adopt')
}

export function goToDonate(router: Router) {
  return router.push('/donate')
}

export function createNavigator(router: Router) {
  return {
    goToAdopt: (id?: string) => goToAdopt(router, id),
    goToDonate: () => goToDonate(router),
  }
}

export function useNavigate() {
  const router = useRouter()
  return createNavigator(router)
}
