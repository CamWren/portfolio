import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '30px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '75px'
          }}
        >
          Home
        </Link>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '75px'
          }}
        >
          About
        </Link>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '75px'
          }}
        >
          Resume
        </Link>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '75px'
          }}
        >
          Works
        </Link>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '75px'
          }}
        >
          Footer
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
