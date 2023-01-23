class Table {
    getElementsMenu() {
        return cy.get('h5').contains('Elements');
    }

    getWebElementsMenu() {
        return cy.get('span').contains('Web Tables')
    }

    addButton() {
        return cy.get('#addNewRecordButton')
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

    fieldAge() {
        return cy.get('#age')
    }

    fieldSalary() {
        return cy.get('#salary')
    }

    fieldDepartment() {
        return cy.get('#department')
    }

    submitButton() {
        return cy.get('#submit')
    }

    fieldSearch() {
        return cy.get('#searchBox')
    }

    tableRow() {
        return cy.get('[class*=rt-tr-group]')
    }

    editButton() {
        return cy.get('#edit-record-2')
    }
}

export default Table
