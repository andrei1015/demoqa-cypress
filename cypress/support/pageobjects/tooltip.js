class Tooltip {
    getTooltipMenu() {
        return cy.get('span').contains('Tool Tips')
    }

    getHoverButton() {
        return cy.get('#toolTipButton')
    }

    getTooltip() {
        return cy.get('[class=tooltip-inner]')
    }
}

export default Tooltip
