import React from 'react'
import { Link } from "react-router-dom";

// Assets:
import Hero from '../assets/home.png'
import Arrow from '../assets/icons/arrow.svg'

// Components:
import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <div className='home'>
      <Layout>
        <figure className='home__figure'>
          <img src={Hero} alt='Rick and Morty'/>
        </figure>

        <nav className='home__nav'>
          <Link className='btn' to='/characters'>
            <h3 className='home__nav-text'>Characters</h3>
            <img className='home__nav-img' src={Arrow} alt='icons' />
          </Link>
        </nav>
      </Layout>
    </div>
  )
}

export default Home
