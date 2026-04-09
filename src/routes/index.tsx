import { createFileRoute } from '@tanstack/solid-router'
import { Effect } from 'effect'
import { createSignal } from 'solid-js'
import { css } from '../../styled-system/css'
import { Button } from '~/shared/ui/primitives/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [count, setCount] = createSignal(0)

  const increaseEffect = Effect.sync(() => {
    setCount(count() + 1)
  })

  const handleClick = () => Effect.runSync(increaseEffect)
  return (
    <>
      <div class={css({ fontSize: '2xl', fontWeight: 'bold' })}>Hello 🐼!</div>
      <Button onClick={handleClick}>Click me</Button>
      {count()}
    </>
  )
}
