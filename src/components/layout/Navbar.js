import React from 'react'

// Components:
import Button from './Button'

const Navbar = ({ info, setUrl }) => {

  const handleClick = (location) => {
    setUrl(location)
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
            <Button
              text={'Prev'}
              handleClick={handleClick}
              location={prev}
            />
          )
      }
      {
        next === null
        ?
          null
        :
          (
            <Button
              text={'Next'}
              handleClick={handleClick}
              location={next}
            />
          )
      }
    </nav>
  )
}

export default Navbar