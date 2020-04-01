import React from 'react';

const userOutput = props => {

	const style = {
		backgroundColor: "#ccc",
		color: "white",
		padding: "5px",
		margin: "5px"
	};

	return (
		<span style={style}>{props.word}</span>
	);
}

export default userOutput;