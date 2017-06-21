import React from 'react';

export default function TextInput(props){
  return (
    <form>
      <label htmlFor = {props.id}> {props.label}</label>
      <input type="text" id = {props.id} placeholder = {props.placeholder} onChange =  {e => console.log(e.target.value)} />
    </form>
  )
};
