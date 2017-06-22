import React from 'react';

export default function Output(props){

  let encoded;
  let content;

  if(!(props.userName === 'MYUSERNAME' || props.password === 'MYPASSWORD')){
    let toEncode = `${props.userName}:${props.password}`
    encoded = btoa(toEncode);
  }else{
    encoded = ''
  }

  if(props.method === "PUT" || props.method === "POST"){
    content = `
     return fetch(
       '${props.endpoint}',{
          method: '${props.method}',
          headers: {
            'Content-Type' : '${props.contentType}',
            'Authorization': '${encoded}'
          }
      })
   `;
 }else {
   content = `
    return fetch(
      '${props.endpoint}',{
        method: '${props.method}',
        headers: {
          'Authorization': '${encoded}'
         };
    });
  `;
 }



  return(
    <div>
      <div className="labelStyle">Output</div>
      <div className={props.className}>
        <pre>{content}</pre>
      </div>
    </div>
  );
};
