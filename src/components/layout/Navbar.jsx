import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            NavBar
        </div>
    </nav> 
  )
}

Navbar.defaultProps = {
    title: 'Github Profiles'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar