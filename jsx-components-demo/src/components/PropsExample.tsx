// Slide: Props - Example

interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}!</h1>;
}

export default function PropsExampleDemo() {
  return (
    <section>
      <h2>Props</h2>
      <Greeting name="Hariom" />
      <Greeting name="Apurva" />
    </section>
  );
}
