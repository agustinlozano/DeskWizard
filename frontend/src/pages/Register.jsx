import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../component/Spinner'

/**
 * Estado del componente pagina: Register
 *
 * Toda la data del formulario se almacena en el objeto 'formData'
 * que proviene del hook 'useState'. Esta informacion corresponde a:
 * - username :: String
 * - name     :: String
 * - email    :: String
 * - password :: String
 *
 * Por otra parte, en el estado globlal de la aplicacion (auth)
 * tenemos:
 *  - user      :: Object
 *  - isLoading :: Bool
 *  - isError   :: Bool
 *  - isSuccess :: Bool
 *  - massage   :: Bool
 *
 * Notamos que la estructura de la informacion del estado local
 * de nuestro componente (formData) esta compartida en el campo
 * 'user' del estado global.
 *
 * Otra cosa a destacar es que en este caso el codigo parece ser
 * totalmente sincrono, ya que todo la logica asincrona esta en
 * el slice 'auth' de nuestro estado global.
 *
 * la cual es seleccionada en este bloque de codigo:
 *
 *    const { user, isLoading, isError, isSuccess, message } = useSelector(
 *      (state) => state.auth
 *    )
 *
 * La funcion onChange es la que actualiza el estado local de la
 * app a traves del input del formulario.
 *
 * La funcion onSubmit es la que manda el formulario y suministra
 * la informacion del usuario desde el estado local del componente
 * al estado globlal de la app.
 */

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  // as we fill in the form fields, the status is updated
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>
              <span>Name</span>
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>
              <span>Email</span>
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>
              <span>Password</span>
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
