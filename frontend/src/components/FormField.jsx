const FormField = ({ type, name, data, label, handleField, message }) => {
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
      />
    </div>
  )
}

export default FormField
