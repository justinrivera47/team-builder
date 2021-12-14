import React from 'react'

const Form = (props) => {

  const handleChange = event => {
    const { name, value } = event.target;
    props.change(name, value);
  }

  handleSubmit = event => {
    preventDefault();
    props.submit();
  }

  return (
    <form>
      <label>
        <input 
            placeholder="enter name"
            value={values.name} 
            name="name"
            onChange={handleChange}
        />
      </label>
      <label>Email
        <input 
            placeholder="enter email"
            value={values.email} 
            name="email"
            onChange={handleChange}
        />
      </label>
      <label>Role
        <input 
            placeholder="enter role"
            value={values.role} 
            name="role"
            onChange={handleChange}
        />
      </label>
      <input type="submit" value="Create your team!" />
    </form>
  )
}

export default Form
