import React from 'react';

const userInput = (props) => {
	return (
		<div className="userInput">
			<input onChange={props.changeWord} value={props.word}/>
		</div>
	);
}

export default userInput;