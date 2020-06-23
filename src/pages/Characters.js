import React from 'react'

// Custom Hook:
import useGetData from '../hooks/useGetData'

// Components:
import Layout from '../components/layout/Layout'
import ListCharacters from '../components/ListCharacters'

const Characters = () => {

  const data = useGetData()

  if (!data.results) return null // Añadir Loading...

  return (
    <div className='characters'>
      <Layout>
        <ListCharacters
          data={data.results}
        />
      </Layout>
    </div>
  )
}

export default Characters
