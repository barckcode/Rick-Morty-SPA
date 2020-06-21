import React, { useEffect, useState } from 'react'

// Components:
import Layout from '../components/layout/Layout'

const Characters = () => {

  const URL = 'https://rickandmortyapi.com/api/character/?page=1'

  const [ data, setDataState ] = useState({})

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(dataAPI => setDataState(dataAPI))
  }, [])

  if (!data.results) return null // Añadir Loading...

  return (
    <div className='characters'>
      <Layout>
        {data.results.map(character => (
          <img src={character.image} />
        ))}
      </Layout>
    </div>
  )
}

export default Characters
