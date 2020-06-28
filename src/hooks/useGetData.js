import { useState, useEffect } from 'react'

const useGetData = (URL) => {

  const [ data, setData ] = useState({})

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(dataAPI => setData(dataAPI))
  }, [URL])

  return data
}

export default useGetData
