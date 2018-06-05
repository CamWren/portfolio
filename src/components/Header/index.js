import React from 'react';
import Link from 'gatsby-link';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const Header = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={

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
            padding: '1.45rem 1.0875rem'
          }}
        >
          <h1 style={{ margin: 0, fontSize: '30px' }}>
            <Link
              to="#home"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '75px'
              }}
            >
              Home
            </Link>
            <Link
              to="#about"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '75px'
              }}
            >
              About
            </Link>
            <Link
              to="#resume"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '75px'
              }}
            >
              Resume
            </Link>
            <Link
              to="#works"
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '75px'
              }}
            >
              Works
            </Link>
            <Link
              to="#footer"
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
    }
  >
  </StickyHeader>
)

export default Header
