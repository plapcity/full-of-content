import React from 'react';

// helper to dynamically render fields for pages, modules
export function	renderFields(source="no source defined", fields, components) {
	// note: source was only used so I could console log things
	if (!fields) return;
  let output = []
  for (const prop in components ) {
    if (fields[prop]){
    	const PageField = components[prop];
    	// below is handling the case of multiple images in a field
    	if (Array.isArray(fields[prop])) {
    		fields[prop].map((item, i) => {
    			output.push(<PageField key={`${prop}-${i}`} data={item} />)
    		})

    	} else {
    		// all other cases
    		output.push(<PageField key={prop} data={fields[prop]} />)
    	}
    }
  }
  return output;
}