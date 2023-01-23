import Menu from '../support/pageobjects/menu'
import Table from '../support/pageobjects/table'


describe('web table tests', () => {

  Cypress.on('uncaught:exception', (err, runnable) => { // the test page has cors errors and js errors that crash cypress, becausee of the ads
    return false;
  });
  
  it('Verify user can enter new data into the table', () => {
    cy.visit('https://demoqa.com/')

    const menu = new Menu()
    const table = new Table()

    menu.getElementsMenu().click()
    table.getWebElementsMenu().click()
    table.addButton().click()

    table.fieldFirstName().type('Alden')
    table.fieldLastName().type('Cantrell')
    table.fieldEmail().type('test@test.com')
    table.fieldAge().type('30')
    table.fieldSalary().type('12345')
    table.fieldDepartment().type('QA')

    table.submitButton().click()

    table.fieldSearch().type('test@test.com')

    table.tableRow().first()
      .should('contain', 'Alden')
      .and('contain', 'Cantrell')
      .and('contain', 'test@test.com')
      .and('contain', '30')
      .and('contain', '12345')
      .and('contain', 'QA')
  })

  it('Verify user can edit the row in a table', () => {
    cy.visit('https://demoqa.com/')

    const menu = new Menu()
    const table = new Table()

    menu.getElementsMenu().click()
    table.getWebElementsMenu().click()

    table.editButton().click()

    table.fieldFirstName().clear().type('Gerimedica')
    table.fieldLastName().clear().type('BV')

    table.submitButton().click()

    table.fieldSearch().type('alden@example.com')

    table.tableRow().first()
      .should('contain', 'Gerimedica')
      .and('contain', 'BV')
  })
})
