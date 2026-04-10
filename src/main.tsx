import 'solid-devtools'
import { render } from 'solid-js/web'
import { RouterProvider } from '@tanstack/solid-router'
import { createRouter } from './router'

const router = createRouter()

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  render(() => <RouterProvider router={router} />, rootElement)
}
