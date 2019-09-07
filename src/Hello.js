import React, { useEffect } from 'react';

const Hello = () => {

  useEffect(() => {
    console.log('hello mounted!');
    
    return () => {
      console.log('hello UNmounted!');
    }
  })


  return <div>HEllo!!!</div>
}

export default Hello;