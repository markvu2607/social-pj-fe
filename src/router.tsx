import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { createRouter as createTanStackRouter } from '@tanstack/solid-router'
import { routeTree } from './routeTree.gen'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'

export function createRouter() {
  const queryClient = new QueryClient()

  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    Wrap: ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
          <SolidQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
        </QueryClientProvider>
      )
    },
  })

  return router
}

declare module '@tanstack/solid-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
