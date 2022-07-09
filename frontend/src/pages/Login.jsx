import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  const onChange = event => {

  }

  const onSubmit = event => {

  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value='aUsername'
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value='aPassword'
              onChange={onChange}
              placeholder='Enter password'
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

export default Login
