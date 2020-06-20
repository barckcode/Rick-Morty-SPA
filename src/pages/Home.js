import React from 'react'
import { Link } from "react-router-dom";

// Components:
import Title from '../components/layout/Title'

// Assets:
import Hero from '../assets/home.png'
import Arrow from '../assets/icons/arrow.svg'

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
        <Link className='btn' to='/characters'>
          <h3 className='home__nav-text'>Characters</h3>
          <img className='home__nav-img' src={Arrow} alt='icons' />
        </Link>
      </nav>
    </main>
  )
}

export default Home
