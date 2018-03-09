// stateless component example (React is still required)
// notice no `class extends React.component`

import React, { Component } from 'react';

const Copy = (props) => {
	return (
		<div className="component component-copy">
			<p>{props.data}</p>
		</div>
	)
}

export default Copy 