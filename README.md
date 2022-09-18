# hts-react-form

A simple and easy form for your react project.

## Installation

```sh
npm install hts-react-form
```

```sh
yarn add hts-react-form
```

## Usage

```js
import React, { useState } from 'react'
import 'hts-react-form/styles/default.css'
import { HTSReactForm } from 'hts-react-form'

function HtsFormExample() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const loginHandler = (e) => {
    e.preventDefault()
  }

  return (
    <HTSReactForm
      controls={[
        {
          label: 'Email',
          type: 'text',
          name: 'email',
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
        },
        {
          label: 'Password',
          type: 'password',
          name: 'password',
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true,
        },
      ]}
      actionControl={{
        label: 'Login',
        onSubmit: loginHandler,
        className: `${btnStyles.button} ${btnStyles.primary}`,
      }}
      forgetPassword={{
        label: 'Forgot Password?',
        onClick: () => {},
      }}
      googleLogin={{
        label: <i className='la la-google-plus'></i>,
        onClick: () => {},
      }}
      facebookLogin={{
        label: <i className='lab la-facebook'></i>,
        onClick: () => {},
      }}
      githubLogin={{
        label: <i className='la la-github'></i>,
        onClick: () => {},
      }}
    />
  )
}

export default HtsFormExample
```

## Preview

![image](https://user-images.githubusercontent.com/108685449/190889797-96301ffb-6d8e-4bba-8ec8-d92be9876618.png)

## Attributes

<table>
<tr>
<td> Key </td> <td> Value </td>
</tr>
<tr>
<td> controls </td>
<td>

Array of input control each contains these properties

```json
{
  "label": "string or JSX.Element"
  "name" :"string"
  "type" :"string"
  "placeholder" :"string (optional)"
  "value" :"any"
  "onChange" :"function"
  "styles" :"React.CSSProperties (optional)"
  "className" :"string (optional)"
  "required" :"boolean (optional) default false"
  "validation" :{ "pattern" : "RegExp", "message": "string" } "(optional)"
  "options": {
    "label": "string"
    "value": "string"
  } "(optional)"
}
```

</td>
</tr>

<tr>
<td> actionControl </td>
<td>

action control otpions

```json
{
  "label": "string or JSX.Element"
  "onSubmit": "function"
  "styles": "React.CSSProperties (optional)"
  "className": "string"
}
```

</td>
</tr>

<tr>
<td> forgetPassword </td>
<td>

option for showing forgot password button

```json
{
  "label": "string or JSX.Element"
  "onClick": "function"
  "styles": "React.CSSProperties (optional)"
  "className": "string"
}
```

</td>
</tr>

<tr>
<td> googleLogin </td>
<td>

option for showing googleLogin button

```json
{
  "label": "string or JSX.Element"
  "onClick": "function"
  "styles": "React.CSSProperties (optional)"
  "className": "string"
}
```

</td>
</tr>

<tr>
<td> githubLogin </td>
<td>

option for showing githubLogin button

```json
{
  "label": "string or JSX.Element"
  "onClick": "function"
  "styles": "React.CSSProperties (optional)"
  "className": "string"
}
```

</td>
</tr>

<tr>
<td> facebookLogin </td>
<td>

option for showing facebookLogin button

```json
{
  "label": "string or JSX.Element"
  "onClick": "function"
  "styles": "React.CSSProperties (optional)"
  "className": "string"
}
```

</td>
</tr>

<tr>
<td> labelClassName </td>
<td>
Custom class name for label style.
</td>
</tr>

<tr>
<td> labelStyles </td>
<td>
Custom style object to override label styles
</td>
</tr>

<tr>
<td> className </td>
<td>
Custom class name for form container style.
</td>
</tr>

<tr>
<td> styles </td>
<td>
Custom style object to override form container styles
</td>
</tr>

<tr>
<td> errorClassName </td>
<td>
Custom class name for form error box style.
</td>
</tr>

<tr>
<td> errorStyles </td>
<td>
Custom style object to override form error box styles
</td>
</tr>
</table>

## Todos

`Firebse auth option for all social logins`

## License

MIT
