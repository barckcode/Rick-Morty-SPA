import React from 'react'
import { Link } from "react-router-dom";

// Components:
import Title from '../components/layout/Title'

// Assets:
import Hero from '../assets/home.png'

const Home = () => {
  return (
    <main className='home'>
      <header className='home__header'>
        <Title />
      </header>

      <figure className='home__figure'>
        <img src={Hero} alt='Rick and Morty'/>
      </figure>

      <nav className='home__nav'>
        <Link className='home__nav-link' to='/characters'>
          Characters
        </Link>
      </nav>
    </main>
  )
}

export default Home
