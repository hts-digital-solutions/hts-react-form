import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { HTSReactForm } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <HTSReactForm
        actionControl={{
          label: 'Login',
          onSubmit: () => {
            console.log('On submit method.')
          },
        }}
        controls={[
          {
            label: 'Email',
            type: 'text',
            name: 'email',
            placeholder: '',
            value: '',
            onChange: () => {
              console.log('On change method.')
            },
          },
        ]}
      />,
    )
  })
})
