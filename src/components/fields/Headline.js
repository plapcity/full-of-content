// stateless component example (React is still required)
// notice no `class extends React.component`

import React, { Component } from 'react';

const Headline = (props) => {
	return (
		<div className="field field-headline">
			<h1>{props.data}</h1>
		</div>
	)
}

export default Headline 