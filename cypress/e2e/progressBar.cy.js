import Menu from '../support/pageobjects/menu'
import progressBar from '../support/pageobjects/progressbar'


describe('practice form', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { // the test page has cors errors and js errors that crash cypress, becausee of the ads
      return false;
    });
    
    it('Verify user can submit the form', () => {
        cy.visit('https://demoqa.com/')

        const menu = new Menu()
        const progressbar = new progressBar()
    
        menu.getWidgetsMenu().click()
        progressbar.getProgressBarMenu().click()

        progressbar.buttonStartStop().click()

        progressbar.getProgressBar().should('have.attr', 'aria-valuenow', '100').then(() => {
            progressbar.getProgressBar().should('have.class', 'bg-success')
            progressbar.getProgressBar().should('have.css', 'background-color', 'rgb(40, 167, 69)')
        })
    
    })
})
