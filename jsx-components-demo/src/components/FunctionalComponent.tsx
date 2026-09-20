// Slide: Functional Component

interface WelcomeProps {
  name: string;
}

function Welcome({ name }: WelcomeProps) {
  return <h1>Hello, {name}!</h1>;
}

export default function FunctionalComponentDemo() {
  return (
    <section>
      <h2>Functional Component</h2>
      <Welcome name="Hariom" />
    </section>
  );
}
