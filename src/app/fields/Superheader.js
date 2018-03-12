// stateless component example (React is still required)
// notice no `class extends React.component`

import React, { Component } from 'react';

const Superheader = (props) => {
	return (
		<div className="field field-superheader">
			<small>{props.data}</small>
		</div>
	)
}

export default Superheader 