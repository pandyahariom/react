// Slide: JSX is an Expression Too

export default function JsxIsExpressionDemo() {
  const showGreeting = true;
  const element = showGreeting ? <h1>Hello!</h1> : <h1>Goodbye!</h1>;

  return (
    <section>
      <h2>JSX is an Expression Too</h2>
      {element}
    </section>
  );
}
