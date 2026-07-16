import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let langs = ["JavaScript", "React", "TypeScript", "MongoDB", "Angular"];
  let cities = ["Nadiad", "Ahmedabad", "Jamnagar", "Vadodara", "Rajkot"];
  let fruits = ["Apple", "Banana", "Mango"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Message />
      {/* handling function prop to pass data from 
         child component to parent component. */}
      <ListGroup
        items={langs}
        heading="Languages"
        onSelectItem={(item) => console.log(item)}
      />
      {/* calling function from parent component to child 
      component using function prop. 
      */}
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* As it's an optional prop, we can use ListGroup component without onSelectItem prop. */}
      <ListGroup items={fruits} heading="Fruits" />
    </div>
  );
}
export default App;
