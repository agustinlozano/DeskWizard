import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset, getTickets } from '../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'
import Spinner from '../components/Spinner'

const Tickets = () => {
  const { tickets, isLoading, isError, isSuccess } = useSelector(
    (state) => state.tickets
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (isError) {
    navigate('/ticket-error')
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BackButton url='/' />
      <h1>Tickets</h1>
      <div className='ticket-list'>
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
