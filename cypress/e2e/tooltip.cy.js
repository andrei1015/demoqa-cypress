import Menu from '../support/pageobjects/menu'
import Tooltip from '../support/pageobjects/tooltip'


describe('practice form', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { // the test page has cors errors and js errors that crash cypress, becausee of the ads
      return false;
    });
    
    it('Verify user can submit the form', () => {
        cy.visit('https://demoqa.com/')

        const menu = new Menu()
        const tooltip = new Tooltip()
    
        menu.getWidgetsMenu().click()
        tooltip.getTooltipMenu().click()

        tooltip.getHoverButton().trigger('mouseover').then(() => {
            cy.wait(1000) // I usually avoid using hard waits, but the tooltip seems to have a delay when showing/hiding
            tooltip.getTooltip().should('be.visible')
        })
    })
})
