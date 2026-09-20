// Slide: Class Component

import React from "react";

interface WelcomeProps {
  name: string;
}

class Welcome extends React.Component<WelcomeProps> {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default function ClassComponentDemo() {
  return (
    <section>
      <h2>Class Component</h2>
      <Welcome name="Apurva" />
    </section>
  );
}
