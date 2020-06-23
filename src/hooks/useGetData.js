import { useState, useEffect } from 'react'

const useGetData = () => {

  const URL = 'https://rickandmortyapi.com/api/character/?page=1'
  const [ data, setData ] = useState({})

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(dataAPI => setData(dataAPI))
  }, [])

  return data
}

export default useGetData
