class Menu {
    getElementsMenu() {
        return cy.get('h5').contains('Elements')
    }

    getFormsMenu() {
        return cy.get('h5').contains('Forms')
    }

    getWidgetsMenu() {
        return cy.get('h5').contains('Widgets')
    }

    getInteractionsMenu() {
        return cy.get('h5').contains('Interactions')
    }
}

export default Menu
