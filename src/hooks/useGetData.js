import { useState, useEffect } from 'react'

const useGetData = (URL) => {
  const API_URL = 'https://rickandmortyapi.com/api/character/'

  const [ url, setUrl ] = useState(API_URL)
  const [ data, setData ] = useState({})

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(dataAPI => setData(dataAPI))
  }, [url])

  return [ data, setUrl ]
}

export default useGetData
