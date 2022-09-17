import React from 'react'

type Control = {
  label: string | JSX.Element
  name: string
  type: string
  placeholder?: string
  value: any
  onChange: any
  styles?: React.CSSProperties
  className?: string
  required?: boolean
  options?: {
    label: string
    value: string
  }[]
}

interface FormProps {
  controls: Control[]
  actionControl: {
    label: string | JSX.Element
    onSubmit: any
    styles?: React.CSSProperties
    className?: string
  }
  forgetPassword?:
    | {
        label: string | JSX.Element
        onClick: any
        styles?: React.CSSProperties
        className?: string
      }
    | false
  googleLogin?:
    | {
        label: string | JSX.Element
        onClick: any
        styles: React.CSSProperties
        className: string
      }
    | false
  githubLogin?:
    | {
        label: string | JSX.Element
        onClick: any
        styles: React.CSSProperties
        className: string
      }
    | false
  facebookLogin?:
    | {
        label: string | JSX.Element
        onClick: any
        styles: React.CSSProperties
        className: string
      }
    | false
  labelClassName?: string
  labelStyles?: React.CSSProperties
  styles?: React.CSSProperties
  className?: string
}

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
}: FormProps): JSX.Element {
  const renderControl = (control: Control, index: number) => {
    const labelTag = (
      <label style={labelStyles} className={`${labelClassName ? labelClassName : 'htsform__label'}`}>
        {control.label}
      </label>
    )
    const InputTag = (
      <input
        type={control.type}
        name={control.name}
        placeholder={control?.placeholder}
        value={control?.value}
        onChange={control?.onChange}
        className={`${control.className ? control.className : 'htsform__control'}`}
        style={control.styles}
        required={control.required || false}
      />
    )

    const SelectTag = (
      <select
        name={control.name}
        value={control?.value}
        onChange={control?.onChange}
        className={`${control.className ? control.className : 'htsform__control'}`}
        style={control.styles}
        required={control.required || false}
      >
        {control?.options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )

    const TextareaTag = (
      <textarea
        name={control.name}
        placeholder={control?.placeholder}
        value={control?.value}
        onChange={control?.onChange}
        className={`${control.className ? control.className : 'htsform__control'}`}
        style={control.styles}
        required={control.required || false}
      ></textarea>
    )

    switch (control.type) {
      case 'text':
        return (
          <div className={'htsform__control__group'} key={index}>
            {labelTag}
            {InputTag}
          </div>
        )
      case 'select':
        return (
          <div className={'htsform__control__group'} key={index}>
            {labelTag}
            {SelectTag}
          </div>
        )
      case 'textarea':
        return (
          <div className={'htsform__control__group'} key={index}>
            {labelTag}
            {TextareaTag}
          </div>
        )
      default:
        return (
          <div className={'htsform__control__group'} key={index}>
            {labelTag}
            {InputTag}
          </div>
        )
    }
  }
  return (
    <form
      key='hts-react-form'
      onSubmit={actionControl?.onSubmit}
      className={`${className ? className : 'htsform__container'}`}
      style={styles}
    >
      {controls?.map((control, index) => renderControl(control, index))}

      {actionControl && (
        <div className={'htsform__control__button'}>
          <div className={'htsform__social'}>
            {googleLogin && (
              <button onClick={googleLogin?.onClick} type='button'>
                {googleLogin?.label}
              </button>
            )}

            {facebookLogin && (
              <button onClick={facebookLogin?.onClick} type='button'>
                {facebookLogin?.label}
              </button>
            )}

            {githubLogin && (
              <button onClick={githubLogin?.onClick} type='button'>
                {githubLogin?.label}
              </button>
            )}
          </div>
          <button>{actionControl.label}</button>
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
