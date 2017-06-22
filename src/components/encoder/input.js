import React from 'react';

export default function TextInput(props){
  return (
    <div className="container input">
      <label htmlFor = {props.id}> {props.label}</label>
      <input className={props.className} type="text" id = {props.id} placeholder = {props.placeholder} onChange =  {e => props.onChange(e.target.value)} />
    </div>
  )
};
