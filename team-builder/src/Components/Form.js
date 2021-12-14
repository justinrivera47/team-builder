import React from 'react'

const Form = (props) => {
  return (
    <form>
      <label>
        <input 
            placeholder="name"
            value={values.name} 
            name="name"
            onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default Form
