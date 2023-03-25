import { Link } from "react-router-dom"
import './Navbar.css'
import './Response-navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
           <Link to={`/`}> Alka Blog  </Link>
        </h2>
        <ul>
            <li>
            <Link className="home-nav" to={`/`} > Home </Link>
            </li>
      
        </ul>
    </nav>

  )
}

export default Navbar