import { useState, useEffect } from 'react'

const useGetData = ({ apiURL }) => {

  let API
  const URL = 'https://rickandmortyapi.com/api/character/?page=1'
  if (apiURL) {
    API = apiURL
  } else {
    API = URL
  }

  const [ data, setData ] = useState({})

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(dataAPI => setData(dataAPI))
  }, [API])

  return data
}

export default useGetData
