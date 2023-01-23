class Form {
    getPracticeFormsMenu() {
        return cy.get('span').contains('Practice Form')
    }

    fieldFirstName() {
        return cy.get('#firstName')
    }

    fieldLastName() {
        return cy.get('#lastName')
    }

    fieldEmail() {
        return cy.get('#userEmail')
    }

    radioGender() {
        return cy.get('[for=gender-radio-1]')
    }

    fieldMobile() {
        return cy.get('#userNumber')
    }

    fieldDateOfBirth() {
        cy.get('#dateOfBirthInput').click()
        cy.get('[class*=react-datepicker__year-select]').select("1990")
        cy.get('[class*=react-datepicker__month-select]').select("January")
        cy.get('[class*=react-datepicker__day--015]').click()
    }

    fieldSubjects() {
        return cy.get('#subjectsInput')
    }

    fieldHobbies() {
        return cy.get('[for=hobbies-checkbox-2]')
    }

    fieldPicture() {
        return cy.get('#uploadPicture')
    }

    fieldAddress() {
        return cy.get('#currentAddress')
    }

    fieldStateCity() {
        return cy.get('[class*=indicatorContainer]')
    }

    selectNCR() {
        return cy.get('[class*=-option]').contains("NCR")
    }

    selectDelhi() {
        return cy.get('[class*=-option]').contains("Delhi")
    }

    submitButton() {
        return cy.get('#submit')
    }

    getInfo(number) {
        return cy.get('[class=modal-body] tbody tr').eq(number)
    }
}

export default Form
