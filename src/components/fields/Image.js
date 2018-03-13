// stateless component example (React is still required)
// notice no `class extends React.component`

import React from 'react';

const Image = (props) => {
	return (
		<div className="field field-image">
			<img alt={props.data.fields.title} src={`https:${props.data.fields.file.url}?w=250`} />
		</div>
	)
}

export default Image 