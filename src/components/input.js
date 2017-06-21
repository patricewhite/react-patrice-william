import React from 'react';

export default function TextInput(props){
  return (
    <div>
      <label htmlFor = {props.id}> {props.label}</label>
      <input type="text" id = {props.id} placeholder = {props.placeholder} onChange =  {e => props.onChange(e.target.value)} />
    </div>
  )
};
