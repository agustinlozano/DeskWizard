import { AiOutlineInfoCircle } from 'react-icons/ai'
import BackButton from '../components/BackButton'

const TicketError = () => {
  return (
    <>
      <BackButton url='/' />
      <section className='heading'>
        <h2>
          <AiOutlineInfoCircle /> Ticket error
        </h2>
        <p>Ups! It Seems there was an error.</p>
      </section>
    </>
  )
}

export default TicketError
