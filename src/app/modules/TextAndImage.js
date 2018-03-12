import React, { Component } from 'react';

const TextAndImage = (props) => {
	console.log("Text and Image", props.data)
	return (
		<div className="component component-image">
			<img src={`https:${props.data.fields.file.url}?w=250`} />
		</div>
	)
}

export default Image 