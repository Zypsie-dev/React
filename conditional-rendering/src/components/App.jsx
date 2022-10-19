import React from "react";
import Form from "./Form";
let loggedIn = "false";
function App() {
	return <div className='container'>{loggedIn ? <h1>Hello</h1> : <Form />}</div>;
}

export default App;
