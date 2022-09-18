import React from 'react'
import { Button } from '../types'

function Button({ label, className, onClick, styles = {} }: Button) {
  return (
    <button
      className={`${className ? className : 'htsform__social_btn'}`}
      style={styles}
      onClick={onClick}
      type='button'
    >
      {label}
    </button>
  )
}

export default Button
