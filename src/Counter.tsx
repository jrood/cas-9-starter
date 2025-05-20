import { signal } from 'cas-9';

export function Counter() {
  const [count, setCount] = signal(0);
  return <button onClick={() => setCount(count() + 1)}>{count}</button>;
}
