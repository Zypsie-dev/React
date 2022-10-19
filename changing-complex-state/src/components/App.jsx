import React, { useState } from "react";
import { preProcessFile } from "typescript";

function App() {
	const [contact, setContact] = useState({
		fName: "",
		lName: "",
		email: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setContact((prevValue) => {
			return { ...prevValue, [name]: value };
		});
	}

	return (
		<div className='container'>
			<h1>
				Hello {contact.fName} {contact.lName}
			</h1>
			<p>{contact.email}</p>
			<form>
				<input name='fName' onChange={handleChange} placeholder='First Name' />
				<input name='lName' onChange={handleChange} placeholder='Last Name' />
				<input name='email' onChange={handleChange} placeholder='Email' />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
