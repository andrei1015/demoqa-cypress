import Menu from '../support/pageobjects/menu'
import Form from '../support/pageobjects/form'


describe('practice form', () => {

    Cypress.on('uncaught:exception', (err, runnable) => { // the test page has cors errors and js errors that crash cypress, becausee of the ads
      return false;
    });
    
    it('Verify user can submit the form', () => {
        cy.visit('https://demoqa.com/')

        const menu = new Menu()
        const form = new Form()
    
        menu.getFormsMenu().click()
        form.getPracticeFormsMenu().click()

        form.fieldFirstName().type('Gerimedica')
        form.fieldLastName().type('BV')
        form.fieldEmail().type('test@test.com')
        form.radioGender().click()
        form.fieldMobile().type('0123456789')
        form.fieldDateOfBirth()
        form.fieldSubjects().type('Cypress Assignment')
        form.fieldHobbies().click()
        form.fieldPicture().selectFile('picture.jpeg')
        form.fieldAddress().type('Netherlands')
        form.fieldStateCity().first().click("top")
        form.selectNCR().click()
        form.fieldStateCity().last().click("top")
        form.selectDelhi().click()
        form.submitButton().click()

        form.getInfo(0).should('contain', 'Gerimedica BV')
        form.getInfo(1).should('contain', 'test@test.com')
        form.getInfo(2).should('contain', 'Male')
        form.getInfo(3).should('contain', '0123456789')
        form.getInfo(4).should('contain', '15 January,1990')
        //form.getInfo(5).should('contain', 'Cypress Assignment')
        // This field only accepts certain strings, Cypress Assignment is not one of them so it deletes whatever is in there
        form.getInfo(6).should('contain', 'Reading')
        form.getInfo(7).should('contain', 'picture.jpeg')
        form.getInfo(8).should('contain', 'Netherlands')
        form.getInfo(9).should('contain', 'NCR Delhi')
    })
})
