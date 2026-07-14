
function Message(){
    const name = "Hariom";
    if (name) {
        // Using JSX: Javascript XML
        return <h1> Hello {name}</h1>
    }
    else {  
        return <h1> Hello React</h1>
    }
}
export default Message;