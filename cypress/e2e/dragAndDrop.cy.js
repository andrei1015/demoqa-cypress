import Menu from '../support/pageobjects/menu'
import DragAndDrop from '../support/pageobjects/dragAndDrop'


describe('practice form', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { // the test page has cors errors and js errors that crash cypress, becausee of the ads
      return false;
    });
    
    it('Verify user can submit the form', () => {
        cy.visit('https://demoqa.com/')

        const menu = new Menu()
        const drag = new DragAndDrop()
    
        menu.getInteractionsMenu().click()
        drag.getDragAndDrop().click()

        drag.dragMe().trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 1000, pageY: 200 })
        .trigger('mouseup')

        drag.dragZone().should('contain', 'Dropped!')
    })
})
