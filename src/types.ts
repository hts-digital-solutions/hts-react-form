export type Control = {
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

export type Button = {
    label: string | JSX.Element
    onClick: any
    styles: React.CSSProperties
    className: string
}

export type ActionControl = {
    label: string | JSX.Element
    onSubmit: any
    styles?: React.CSSProperties
    className?: string
}
  
export  interface FormProps {
    controls: Control[]
    actionControl: ActionControl
    forgetPassword?:
      | Button
      | false
    googleLogin?:
      | Button
      | false
    githubLogin?:
      | Button
      | false
    facebookLogin?:
      | Button
      | false
    labelClassName?: string
    labelStyles?: React.CSSProperties
    styles?: React.CSSProperties
    className?: string
    errorClassName?: string
    errorStyles?: React.CSSProperties
  }