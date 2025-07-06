import { signal } from 'alien-signals';

export function Counter() {
  const count = signal(0);
  return <button onClick={() => count(count() + 1)}>{count}</button>;
}
