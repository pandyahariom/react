// Slide: Looping and Rendering Lists

function ShoppingList() {
  const items: string[] = ["Fruits", "Vegetables", "Milk"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function LoopingListsDemo() {
  return (
    <section>
      <h2>Looping and Rendering Lists</h2>
      <ShoppingList />
    </section>
  );
}
