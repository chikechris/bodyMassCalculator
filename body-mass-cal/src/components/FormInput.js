import React from 'react'
import PropTypes from 'prop-types'

const FormInput = props => {
  const {
    name,
    type,
    title,
    value,
    onChange
  }= props

  return (
    <div className='input-groups'>
      <span className='label'>{title}</span>
      <div className='range-container'>
        <input 
        type={type}
        name={name}
        className='range-input'
        value={value}
        onChange={onChange}
        />
      </div>
    </div>
  )
}

FormInput.propTypes = {

}

export default FormInput
