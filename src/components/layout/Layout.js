import React from 'react'

// Components:
import Title from './Title'

const Layout = ({ children }) => {
  return (
    <main>
      <Title />
      {children}
    </main>
  )
}

export default Layout
