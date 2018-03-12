// stateless component example (React is still required)
// notice no `class extends React.component`

import React, { Component } from 'react';

const Image = (props) => {
	console.log("Image", props.data)
	return (
		<div className="component component-image">
			<img src={`https:${props.data.fields.file.url}?w=250`} />
		</div>
	)
}

export default Image 