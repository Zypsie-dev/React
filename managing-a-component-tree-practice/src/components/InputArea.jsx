import React from "react";
function InputArea(props) {
	function handleChange(event) {
		const newValue = event.target.value;
		props.setInputText(newValue);
	}

	return (
		<div className='form'>
			<input onChange={handleChange} type='text' value={props.inputText} />
			<button onClick={props.addItem}>
				<span>Add</span>
			</button>
		</div>
	);
}

export default InputArea;
