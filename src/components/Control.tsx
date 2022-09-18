import React, { useState } from 'react'
import { Control } from '../types'

type ControlProps = {
  control: Control
  errorClassName: string
  errorStyles: React.CSSProperties
  labelClassName: string
  labelStyles: React.CSSProperties
}

function Control({ control, labelStyles, labelClassName, errorStyles, errorClassName }: ControlProps): JSX.Element {
  const [error, setError] = useState('')

  const onChangeHandler = (e: any, control: Control) => {
    e.preventDefault()
    if (control.required && !e.target.value?.trim()) {
      setError(`${control.label} is required.`)
    } else {
      setError('')
    }

    control.onChange(e)
  }

  const renderControl = (
    control: Control,
    labelStyles: React.CSSProperties,
    labelClassName: string,
    errorClassName: string,
    errorStyles: React.CSSProperties,
  ) => {
    const labelTag = (
      <label style={labelStyles} className={`${labelClassName ? labelClassName : 'htsform__label'}`}>
        {control.label}
      </label>
    )

    const errorTag = (
      <p style={errorStyles} className={`${errorClassName ? errorClassName : 'htsform__error'}`}>
        {error}
      </p>
    )

    const InputTag = (
      <input
        type={control.type}
        name={control.name}
        placeholder={control?.placeholder}
        value={control?.value}
        onChange={(e) => onChangeHandler(e, control)}
        className={`${control.className ? control.className : 'htsform__control'}`}
        style={control.styles}
        required={control.required || false}
      />
    )

    const SelectTag = (
      <select
        name={control.name}
        value={control?.value}
        onChange={(e) => onChangeHandler(e, control)}
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
        onChange={(e) => onChangeHandler(e, control)}
        className={`${control.className ? control.className : 'htsform__control'}`}
        style={control.styles}
        required={control.required || false}
      ></textarea>
    )

    switch (control.type) {
      case 'text':
        return (
          <div className={'htsform__control__group'}>
            {labelTag}
            {InputTag}
            {errorTag}
          </div>
        )
      case 'select':
        return (
          <div className={'htsform__control__group'}>
            {labelTag}
            {SelectTag}
            {errorTag}
          </div>
        )
      case 'textarea':
        return (
          <div className={'htsform__control__group'}>
            {labelTag}
            {TextareaTag}
            {errorTag}
          </div>
        )
      default:
        return (
          <div className={'htsform__control__group'}>
            {labelTag}
            {InputTag}
            {errorTag}
          </div>
        )
    }
  }

  return renderControl(control, labelStyles, labelClassName, errorClassName, errorStyles)
}

export default Control
