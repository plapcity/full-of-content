// stateless component example (React is still required)
// notice no `class extends React.component`

import React, { Component } from 'react';

const Superheader = (props) => {
	return (
		<div className="component component-superheader">
			<h1>{props.data}</h1>
		</div>
	)
}

export default Superheader 