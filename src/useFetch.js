import { useEffect, useState } from 'react';

const useFetch = (url) => {

  const [state, setState] = useState( {data: null, loading: false} );

  useEffect(() => {

    setState({data: null, loading: true});
    
    fetch(url)
    .then( data => data.text() )
    .then( text => {
      setState({data: text, loading: false});
      console.log('text:::', text)
    })
  }, [url])

  return state;
}

export default useFetch;