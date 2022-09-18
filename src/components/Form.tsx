import React from 'react'
import { FormProps } from '../types'
import Button from './Button'
import Control from './Control'

function Form({
  controls,
  actionControl,
  forgetPassword = false,
  googleLogin = false,
  githubLogin = false,
  facebookLogin = false,
  labelClassName = '',
  labelStyles = {},
  styles = {},
  className = '',
  errorClassName = '',
  errorStyles = {},
}: FormProps): JSX.Element {
  return (
    <form
      key='hts-react-form'
      onSubmit={actionControl?.onSubmit}
      className={`${className ? className : 'htsform__container'}`}
      style={styles}
    >
      {controls?.map((control, index) => (
        <Control
          key={index}
          control={control}
          errorClassName={errorClassName}
          errorStyles={errorStyles}
          labelClassName={labelClassName}
          labelStyles={labelStyles}
        />
      ))}

      {actionControl && (
        <div className={'htsform__control__button'}>
          <div className={'htsform__social'}>
            {googleLogin && <Button {...googleLogin} />}

            {facebookLogin && <Button {...facebookLogin} />}

            {githubLogin && <Button {...githubLogin} />}
          </div>
          <button
            style={actionControl?.styles}
            className={`${actionControl.className ? actionControl.className : 'htsform__action__btn'}`}
          >
            {actionControl.label}
          </button>
        </div>
      )}

      {forgetPassword && (
        <button className={'htsform__forgot'} type='button' onClick={forgetPassword?.onClick}>
          {forgetPassword?.label}
        </button>
      )}
    </form>
  )
}

export default Form
