import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'

const Tickets = () => {
  const tickets = []

  return (
    <>
      <BackButton url='/' />
      <h1>Tickets</h1>
      <div className=''>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div />
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  )
}

export default Tickets
