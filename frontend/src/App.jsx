import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Tickets from './pages/Tickets'
import Ticket from './pages/Ticket'
import TicketError from './pages/TicketError'
import PageNotFound from './pages/PageNotFound'
import NewTicket from './pages/NewTicket'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/new-ticket' element={<PrivateRoute />}>
              <Route path='/new-ticket' element={<NewTicket />} />
            </Route>

            <Route path='/tickets' element={<PrivateRoute />}>
              <Route path='/tickets' element={<Tickets />} />
            </Route>

            <Route path='/ticket/:ticketId' element={<PrivateRoute />}>
              <Route path='/ticket/:ticketId' element={<Ticket />} />
            </Route>

            <Route path='ticket-error' element={<TicketError />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
