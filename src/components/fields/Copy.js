// stateless component example (React is still required)
// notice no `class extends React.component`

import React from 'react';

const Copy = (props) => {
	return (
		<div className="field field-copy">
			<p>{props.data}</p>
		</div>
	)
}

export default Copy 