import React from 'react'

const Navbar = ({ info, setURL }) => {

  const handleButton = (apiURL) => {
    setURL(apiURL)
  }

  const { prev, next } = info

  return (
    <nav className='navbar'>
      {
        prev === null
        ?
          null
        :
          (
            <button
              className='btn'
              type='button'
              onClick={() => handleButton(prev)}
            >
              <h4>Prev</h4>
            </button>
          )
      }
      {
        next === null
        ?
          null
        :
          (
            <button
              className='btn'
              type='button'
              onClick={() => handleButton(next)}
            >
              <h4>Next</h4>
            </button>
          )
      }
    </nav>
  )
}

export default Navbar
