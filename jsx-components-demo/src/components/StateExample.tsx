// Slide: State - Example

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default function StateExampleDemo() {
  return (
    <section>
      <h2>State</h2>
      <Counter />
    </section>
  );
}
