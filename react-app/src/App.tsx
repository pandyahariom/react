import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let langs = ["JavaScript", "React", "TypeScript", "MongoDB", "Angular"];
  let cities = ["Nadiad", "Ahmedabad", "Jamnagar", "Vadodara", "Rajkot"];
  return (
    <div>
      <Message />
      <ListGroup items={langs} heading="Languages" />
      <ListGroup items={cities} heading="Cities" />
    </div>
  );
}
export default App;
