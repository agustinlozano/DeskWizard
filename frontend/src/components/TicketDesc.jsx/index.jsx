import { useSelector } from 'react-redux'
import BackButton from '../BackButton'

const TicketDesc = ({ ticket }) => {
  const { notes } = useSelector(
    (state) => state.notes
  )

  return (
    <header>
      <BackButton url='/tickets' />
      <h2>
        Ticket ID: {ticket._id}
        <span className={`status status-${ticket.status}`}>
          {ticket.status}
        </span>
      </h2>
      <h3>
        Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
      </h3>
      <h3>Product: {ticket.product}</h3>
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
