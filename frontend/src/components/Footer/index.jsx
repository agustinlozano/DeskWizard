import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='developer'>
        <p>Developed by
          <a href='https://www.linkedin.com/in/agustin-lozano-blua/'>
            <span>&nbsp;Agustin Lozano</span>
          </a>
        </p>
      </div>
      <ul className='social-media'>
        <li>
          <a href='https://github.com/agustinlozano'><AiFillGithub /></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/agustin-lozano-blua/'><AiFillLinkedin /></a>
        </li>
        <li>
          <a href='mailto:agustinlozanoblua@gmail.com'><SiGmail /></a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
