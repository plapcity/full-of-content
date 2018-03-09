// stateless component example (React is still required)
// notice no `class extends React.component`

import React, { Component } from 'react';

const HeroImage = (props) => {
	console.log("hero image", props.data)
	return (
		<div class="component component-heroimage">
			<img src={`https:${props.data.fields.file.url}?w=250`} />
		</div>
	)
}

export default HeroImage 