import React from 'react';

// helper to dynamically render fields for pages, modules
export function	renderFields(fields, components) {  
	if (!fields) return;
  let output = []
  for (const prop in components ) {
  	console.log(prop);
    if (fields[prop]){
      const PageField = components[prop];
      output.push(<PageField key={prop} data={fields[prop]} />)
    }
  }
  return output;
}