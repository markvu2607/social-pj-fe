import { TanStackDevtools } from '@tanstack/solid-devtools'
import { formDevtoolsPlugin } from '@tanstack/solid-form-devtools'
import { Outlet, createRootRoute } from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'
import '../index.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-left" />
      <TanStackDevtools plugins={[formDevtoolsPlugin()]} />
    </>
  )
}
