import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
	const [items, setItems] = useState([]);
	const [inputText, setInputText] = useState("");

	function deleteItem(id) {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	}
	function addItem() {
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
		setInputText("");
	}
	return (
		<div className='container'>
			<div className='heading'>
				<h1>To-Do List</h1>
			</div>
			<InputArea addItem={addItem} setInputText={setInputText} inputText={inputText} />
			<div>
				<ul>
					{items.map((todoItem, index) => (
						<ToDoItem
							key={index}
							id={index}
							text={todoItem}
							onChecked={deleteItem}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
