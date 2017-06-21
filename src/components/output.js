import React from 'react';

export default function Output(props){

  let encoded;

  if(!(props.userName === 'MYUSERNAME' || props.password === 'MYPASSWORD')){
    let toEncode = `${props.userName}:${props.password}`
    encoded = btoa(toEncode);
  }else{
    encoded = 'YOUR USERNAME AND PASS AS A BASE64 STRING'
  }

  let content = `
    return fetch('${props.endpoint}',{
    method: '${props.method}',
    headers: {
      'Authorization': '${encoded}'
    }
  })
  `;

  return(
    <textarea value={content} readOnly/>
  );
};