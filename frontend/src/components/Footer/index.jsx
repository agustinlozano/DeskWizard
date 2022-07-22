import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import './footer.css'
import './animation.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='developer efect'>
        <a
          href='https://www.linkedin.com/in/agustin-lozano-blua/'
          target='_blank'
          rel='noreferrer'
        >
          Developed by<span>&nbsp;Agustin Lozano</span>
          <span class='border border-top' />
          <span class='border border-right' />
          <span class='border border-bottom' />
          <span class='border border-left' />
        </a>
      </div>
      <ul className='social-media'>
        <li>
          <a
            href='https://github.com/agustinlozano'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/agustin-lozano-blua/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a
            href='mailto:agustinlozanoblua@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <SiGmail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
