function ListGroup() {
    //  Reference of Bootstrap ListGroup:  https://getbootstrap.com/docs/5.3/components/list-group/
    let items = ['JavaScript', 'React', 'TypeScript', 'MongoDB', 'Angular'];
    return (
        // Any react component can return only one element, 
        // so we can use Fragment to wrap multiple elements.
        // We can use <> and </> or <Fragment> and </Fragment> to wrap multiple elements.
        // To use Fragment, we need to import it from React as import {Fragment} from "react";
        
        <>
            <h3>List Group</h3>
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;