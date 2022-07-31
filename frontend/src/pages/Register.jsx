import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import FormField from '../components/FormField'
import Spinner from '../components/Spinner'

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
    username: '',
    password: '',
    password2: ''
  })

  const { email, name, username, password, password2 } = formData

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

  // As we fill in the form fields, the status is updated
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
        username,
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
          <FormField
            type='email'
            name='email'
            data={email}
            label='Email'
            handleField={onChange}
            message='Enter your email'
          />
          <FormField
            type='text'
            name='name'
            data={name}
            label='Name'
            handleField={onChange}
            message='Enter your name'
          />
          <FormField
            type='text'
            name='username'
            data={username}
            label='Username'
            handleField={onChange}
            message='Enter your username'
          />
          <FormField
            type='password'
            name='password'
            data={password}
            label='Password'
            handleField={onChange}
            message='Enter your password'
          />
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
