import { createFileRoute } from '@tanstack/solid-router'
import { Effect } from 'effect'
import { createSignal } from 'solid-js'

export const Route = createFileRoute('/')({ component: App })

const [count, setCount] = createSignal(0)
const increaseEffect = Effect.sync(() => {
  setCount(count() + 1)
})

function App() {
  const handleClick = () => Effect.runSync(increaseEffect)
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      {count()}
    </>
  )
}
