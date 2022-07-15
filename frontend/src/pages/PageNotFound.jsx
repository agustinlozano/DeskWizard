import { AiOutlineInfoCircle } from 'react-icons/ai'
import BackButton from '../components/BackButton'

const PageNotFound = () => {
  return (
    <>
      <BackButton url='/' />
      <section className='heading'>
        <h2>
          <AiOutlineInfoCircle /> Not found
        </h2>
        <p>Ups! It Seems there was an error.</p>
      </section>
    </>
  )
}

export default PageNotFound
