import React, { Component } from 'react';
import Copy from '../atoms/Copy';
import Title from '../atoms/Title';
import Image from '../atoms/Image';


class TextAndImage extends React.Component {

	renderComponents(fields) {
    console.log("render fields", fields)
    const components = {
      title: Title,
      copy: Copy,
      image: Image
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
			<div className="module text-and-image-module">
				{this.renderComponents(this.props.data)}
			</div>
  	)
  }


}

export default TextAndImage 