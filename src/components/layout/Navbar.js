import React from 'react'

// Custom Hook:
import useGetData from '../../hooks/useGetData'

const Navbar = () => {

  const data = useGetData()

  return (
    <nav className='navbar'>
      <p>Navbar</p>
    </nav>
  )
}

export default Navbar
