import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  component: {
    height: '6vh',
    backgroundColor: 'red',
    color: 'white',
    marginTop: -16
  },
  linksContainer: {
    width: '40vw',
    height: '6vh',
    backgroundColor: 'yellow',
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  menu: {
    // display: 'grid',
    // justifyContent: 'end',
    // textAlign: 'center',
    listStyle: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
    PaddingTop: '3rem'
  },
  menuItems: {
    display: 'inline',
    // display: 'flex',
    alignItems: 'center',
    height: '6vh',
    marginLeft: '3rem',
    marginRight: '3rem'
  },
  link: {
    textDecoration: 'none',
    fontSize: '2vh',
    padding: '2vh 0.5vw'
  }
}

export const Navbar = () => {
  return (
    <>
      <nav style={styles.component}>
        <div style={styles.linksContainer}>
          <ul style={styles.menu}>
            <li style={styles.menuItems}>
              <Link to='/' style={styles.link}>
                Home
              </Link>
            </li>
            <li style={styles.menuItems}>
              <Link to='/register' style={styles.link}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
