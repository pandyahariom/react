// Slide: React fragment

import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome to React</p>
    </React.Fragment>
  );
}

export default function ReactFragmentDemo() {
  return (
    <section>
      <h2>React Fragment</h2>
      <App />
    </section>
  );
}
