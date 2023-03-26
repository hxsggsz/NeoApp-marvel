import React from 'react'
import { BuyMenu } from './buy-menu'

describe('<BuyMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BuyMenu />)
  })
})