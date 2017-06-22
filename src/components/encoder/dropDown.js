import React from 'react';

export default function Dropdown(props){
  return(
    <div className="container input">
      <label htmlFor = {props.id}> {props.label}</label>
      <select className={props.className} defaultValue="POST" onChange = {e => props.onChange(e.target.value)}>
        <option value="PUT">"PUT"</option>
        <option value="POST">"POST"</option>
        <option value="DELETE">"DELETE"</option>
        <option value="GET">"GET"</option>
      </select>
    </div>
  )
}
