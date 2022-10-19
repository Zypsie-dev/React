import React, { useState } from "react";
import List from "./List";

function App() {
	const [list, setList] = useState("");
	const [items, setItems] = useState([]);

	function handleChange(event) {
		const newValue = event.target.value;
		setList(newValue);
	}
	function handleSubmit() {
		setItems((prevValue) => {
			return [...prevValue, list];
		});
	}
	function deleteItem(id) {
		setItems((prevValue) => {
			return prevValue.filter((item, index) => {
				return index !== id;
			});
		});
	}
	return (
		<div className='container'>
			<div className='heading'>
				<h1>To-Do List</h1>
			</div>
			<div className='form'>
				<input type='text' onChange={handleChange} value={list} />
				<button onClick={handleSubmit}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{items.map((item, index) => {
						return (
							<List key={index} id={index} text={item} onClicked={deleteItem} />
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
