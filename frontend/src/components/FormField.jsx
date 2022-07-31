const FormField = ({ type, name, data, label, handleField, message, autocomplete = 'off' }) => {
  return (
    <div className='form-group'>
      <label htmlFor={type}>
        <span>{label}</span>
      </label>
      <input
        type={type}
        className='form-control'
        name={name}
        value={data}
        onChange={handleField}
        placeholder={message}
        required
        autoComplete={autocomplete}
      />
    </div>
  )
}

export default FormField
