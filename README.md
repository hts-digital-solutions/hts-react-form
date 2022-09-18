<h1>hts-react-form</h1>
<p>A simple and easy form for your react project.</p>

<h2>Install</h2>
<code> npm i hts-react-form </code>
<br />
<br />
<code> yarn add hts-react-form </code>

# hts-react-form
A simple and easy form for your react project.
## Installation

```sh
npm install hts-react-form
```

## Usage

```js
import React, { useState } from "react";
import "hts-react-form/styles/default.css";
import { HTSReactForm } from "hts-react-form";

function HtsFormExample() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <HTSReactForm
      controls={[
        {
          label: "Email",
          type: "text",
          name: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
        },
        {
          label: "Password",
          type: "password",
          name: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true,
        },
      ]}
      actionControl={{
        label: "Login",
        onSubmit: loginHandler,
        className: `${btnStyles.button} ${btnStyles.primary}`,
      }}
      forgetPassword={{
        label: "Forgot Password?",
        onClick: () => {},
      }}
      googleLogin={{
        label: <i className="la la-google-plus"></i>,
        onClick: () => {},
      }}
      facebookLogin={{
        label: <i className="lab la-facebook"></i>,
        onClick: () => {},
      }}
      githubLogin={{
        label: <i className="la la-github"></i>,
        onClick: () => {},
      }}
    />
  );
}

export default HtsFormExample;

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)