import React from 'react'

// Custom Hook:
import useGetData from '../hooks/useGetData'

// Components:
import Layout from '../components/layout/Layout'
import ListCharacters from '../components/ListCharacters'
import Navbar from '../components/layout/Navbar'

const Characters = () => {

  // Get Data Custom Hooks
  const [ data, setUrl ] = useGetData()

  if (!data.results) return null // Add Loading...

  // Destructing Data
  const { info , results } = data

  return (
    <div className='characters'>
      <Layout>
        <section className='characters__container' >
          <ListCharacters
            results={results}
          />
        </section>

        <Navbar
          info={info}
          setUrl={setUrl}
        />
      </Layout>
    </div>
  )
}

export default Characters
