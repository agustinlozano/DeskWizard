import { useSelector } from 'react-redux'
import BackButton from '../BackButton'
import './ticketDesc.css'

const TicketDesc = ({ ticket }) => {
  const { notes } = useSelector(
    (state) => state.notes
  )

  return (
    <header className='ticket-info'>
      <BackButton url='/tickets' />
      <h2>
        Ticket ID: <small className='ticket-data'>{ticket._id}</small>
        <span className={`status status-${ticket.status}`}>
          {ticket.status}
        </span>
      </h2>
      <h3>
        Date Submitted:
        <small className='ticket-data'>&nbsp;{new Date(ticket.createdAt).toLocaleString('en-US')}</small>
      </h3>
      <h3>Product:
        <small className='ticket-data'>&nbsp;{ticket.product}</small>
      </h3>
      <hr />
      <div className='ticket-desc'>
        <h3>Description of Issue</h3>
        <p>{ticket.description}</p>
      </div>
      {
        notes.length > 0
          ? <h2>Notes</h2>
          : <h2 />
      }
    </header>
  )
}

export default TicketDesc
