import React from 'react'

// Custom Hook:
import useGetData from '../hooks/useGetData'

// Components:
import Layout from '../components/layout/Layout'
import ListCharacters from '../components/ListCharacters'
// import Navbar from '../components/layout/Navbar'

const Characters = () => {

  let apiURL
  const data = useGetData(apiURL ? apiURL : "")

  if (!data.results) return null // Añadir Loading...

  const handleNext = () => {
    const URL = data.info.next
    apiURL = URL
  }

  return (
    <div className='characters'>
      <Layout>
        <section className='characters__container' >
          <ListCharacters
            data={data.results}
          />
        </section>

        <nav>
          <button type='button' onClick={() => handleNext()} >
            Next
          </button>
        </nav>
      </Layout>
    </div>
  )
}

export default Characters
