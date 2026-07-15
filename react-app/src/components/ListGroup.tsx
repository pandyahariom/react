function ListGroup() {
    //  Reference of Bootstrap ListGroup:  https://getbootstrap.com/docs/5.3/components/list-group/
    let items = ['JavaScript', 'React', 'TypeScript', 'MongoDB', 'Angular'];
    return (
        <ul className="list-group">
            {items.map(item => <li className="list-group-item">{item}</li>)}
        </ul>
    );
}

export default ListGroup;