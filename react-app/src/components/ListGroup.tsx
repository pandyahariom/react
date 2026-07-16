import { useState } from "react";

interface ListGroupProps {
  // TypeScript way of define the interface.
  // The items prop is an array of strings that will be
  // displayed in the list group.
  items: string[];
  heading: string;
}

// Apart from below mentioned way another way is to use props as parameter
// and then use props.items and props.heading in the JSX.
// EX. function ListGroup(props: ListGroupProps)
function ListGroup({ items, heading }: ListGroupProps) {
  // useState hook to manage the selected index of the list items.
  // The initial value is set to -1, indicating that no item is selected by default.
  // It returns an array with two elements: the current state value and a function to update that state
  // We are storing the current selected index in the state variable selectedIndex and the function to update it in setSelectedIndex.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Any react component can return only one element,
    // so we can use Fragment to wrap multiple elements.
    // We can use <> and </> or <Fragment> and </Fragment> to wrap multiple elements.
    // To use Fragment, we need to import it from React as import {Fragment} from "react";

    <>
      <h3>{heading}</h3>

      {/* 
             Use of conditional rending: If the items array is empty, we can show a message to the user.
             Way 1: Using Ternary Operator 
                    Ex. {items.length === 0 ? <p>No items found !</p> : null }
             Way 2: We can use const variable outside return statement to store the message and then use it in the JSX.
                    Ex. Outside return write const message = items.length === 0 ? <p>No items found !</p> : null; and then use {message} in the JSX.
             Way 3: we can create a function outside return statement to return the message and then use it in the JSX.
                    Ex. Outside return write function renderMessage() { return items.length === 0 ? <p>No items found !</p> : null; } and then use {renderMessage()} in the JSX.
             Way 4: We can use && operator to conditionally render the message. 
                    Ex. This is used in next line.
             */}

      {items.length === 0 && <p>No items found !</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
