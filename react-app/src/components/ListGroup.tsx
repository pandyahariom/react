import { MouseEvent } from "react";
function ListGroup() {
  //  Reference of Bootstrap ListGroup:  https://getbootstrap.com/docs/5.3/components/list-group/
  let items = ["JavaScript", "React", "TypeScript", "MongoDB", "Angular"];

  const handleClickEvent = (event: MouseEvent, item: string, index: number) => {
    // Here typeScript require us to specify the type of all arguments.
    // For the event argument, we can use the MouseEvent type from React (as we have imported above)

    // onClick expect a callback function which will be called when the event is triggered.
    // The callback function will receive the event object as an argument.
    // The event object contains information about the event that occurred,
    // such as the type of event, the target element etc.
    console.log(index + " : " + item + " : " + event);
  };
  return (
    // Any react component can return only one element,
    // so we can use Fragment to wrap multiple elements.
    // We can use <> and </> or <Fragment> and </Fragment> to wrap multiple elements.
    // To use Fragment, we need to import it from React as import {Fragment} from "react";

    <>
      <h3>List Group</h3>

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
            className="list-group-item"
            onClick={(event) => handleClickEvent(event, item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
