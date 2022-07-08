import { FaSignInAlt, FaSignOutAlt, FaTicketAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = false

  const onLogout = () => {}

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          Support Desk <FaTicketAlt className='logo-icon' />
        </Link>
      </div>

      <ul>
        {user
          ? (
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
            )
          : (
            <>
              <li>
                <Link to='/'>
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FaUser /> Register
                </Link>
              </li>
            </>
            )}
      </ul>
    </header>
  )
}

export default Header
