// Slide: Embedding Expressions in JSX

export default function EmbeddingExpressionsDemo() {
  const user = {
    firstName: "Hariom",
    lastName: "Pandya",
  };

  const greeting = (
    <h1>
      Hello, {user.firstName} {user.lastName}!
    </h1>
  );

  return (
    <section>
      <h2>Embedding Expressions in JSX</h2>
      {greeting}
    </section>
  );
}
