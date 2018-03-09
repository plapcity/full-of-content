// stateless component example (React is still required)
// notice no `class extends React.component`

import React, { Component } from 'react';

const Title = (props) => {
	return (
		<div className="component component-title">
			<h1>{props.data}</h1>
		</div>
	)
}

export default Title 