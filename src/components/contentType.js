import React from 'react';

export default function Content(props){
  return(
    <div>
      <label htmlFor = {props.id}> {props.label}</label>
      <form id={props.id} onChange ={e => props.onChange(e.target.value)}>
        <input type="radio" name="contentType" value="application/x-www-form-urlencoded" checked/>x-www-form-urlencoded<br/>
        <input type="radio" name="contentType" value="application/xml"/>xml<br/>
        <input type="radio" name="contentType" value="application/json"/>json<br/>
        <input type="radio" name="contentType" value="application/javascript"/>javascript<br/>
      </form>
    </div>
  )
}
