import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

// Custom Hook:
import useGetData from '../hooks/useGetData'

// Components:
import Layout from '../components/layout/Layout'
import Button from '../components/layout/Button'

const Character = () => {

  let history = useHistory()
  let id = useLocation().pathname.slice(27)
  const API_URL = `https://rickandmortyapi.com/api/character/${id}`

  // Get Data Custom Hooks
  const [ data, setUrl] = useGetData()

  useEffect(() => {
    setUrl(API_URL)
  }, [API_URL, setUrl])

  if (!data) return null // Add Loading...

  const handleClick = (location) => {
    history.push(location)
  }

  // Destructing Data
  const { name, status, species, gender, origin, location, image, episode } = data

  return (
    <div className='characters one-character'>
      <Layout>
        <article className='characters__card'>
          <figure>
            <img
              className='characters__card-img'
              src={image}
              alt={name}
            />
          </figure>

          <div className='characters__card-description'>
            <h3>{name}</h3>
            <div className='description__grid'>
              <p>Species:</p>
              <p>{species}</p>
              <p>Status:</p>
              <p>{status}</p>
              <p>Gender:</p>
              <p>{gender}</p>
              <p>Origin:</p>
              <p>{origin ? origin.name : ''}</p>
              <p>Location:</p>
              <p>{location ? location.name : ''}</p>
              <p>Episodes:</p>
              <p>{episode ? episode.length : ''}</p>
            </div>
          </div>
        </article>

        <Button
          text={'All Characters'}
          handleClick={handleClick}
          location={'/Rick-Morty-SPA/characters'}
        />
      </Layout>
    </div>
  )
}

export default Character
