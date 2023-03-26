import { SetStateAction } from 'react';
import { Pagination } from './pagination'
import { mount } from 'cypress/react18';
import { BrowserRouter } from 'react-router-dom';

describe('<Pagination />', () => {
  it('renders', () => {
    mount(
      <BrowserRouter>
        <Pagination max={10} pagination={0} setPagination={() => {}} />
      </BrowserRouter>
    )

    cy.get("button").contains(5).click()
    cy.get("button").contains(6)
  })
})