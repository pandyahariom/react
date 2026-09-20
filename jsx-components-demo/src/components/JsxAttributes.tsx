// Slide: JSX Attributes

interface StudentProps {
  name: string;
  branch: string;
}

function Student({ name, branch }: StudentProps) {
  return (
    <p>
      {name} - {branch}
    </p>
  );
}

export default function JsxAttributesDemo() {
  return (
    <section>
      <h2>JSX Attributes</h2>

      <Student name="Student" branch="Computer Engineering" />

      <h1 className="title">Hello with ClassName</h1>
      <p style={{ color: "blue", fontSize: "20px" }}>Styled with inline CSS</p>

      <button onClick={() => alert("Button clicked!")}>Click Me</button>
    </section>
  );
}
