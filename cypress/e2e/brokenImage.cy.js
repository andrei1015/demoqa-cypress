import Menu from '../support/pageobjects/menu'
import Image from '../support/pageobjects/brokenImage'


describe('broken image', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { // the test page has cors errors and js errors that crash cypress, becausee of the ads
      return false;
    });
    
    it('Verify broken image', () => {
        cy.visit('https://demoqa.com/')

        const menu = new Menu()
        const image = new Image()
    
        menu.getElementsMenu().click()
        image.getBrokenLinks().click()

        image.getBrokenImage().then(($img) => {
            cy.wrap($img).scrollIntoView().should('be.visible');
            expect($img[0].naturalWidth).to.equal(0);
            expect($img[0].naturalHeight).to.equal(0);
        })
    })
})
