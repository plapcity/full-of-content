import React, { Component } from 'react';
import Copy from '../atoms/Copy';
import Title from '../atoms/Title';
import Superheader from '../atoms/Superheader';


class Text extends React.Component {

	renderComponents(fields) {
    console.log("render fields", fields)
    const components = {
      superheader: Superheader,
      title: Title,
      copy: Copy
    }
    let output = []

    for (const prop in components ) {
      if (fields[prop]){
        const PageField = components[prop];
        output.push(<PageField key={prop} data={fields[prop]} />)
      }
    }

    return output;

  }

  render() {
  	return(
			<div className="module text-module">
				{this.renderComponents(this.props.data)}
			</div>
  	)
  }


}

export default Text 