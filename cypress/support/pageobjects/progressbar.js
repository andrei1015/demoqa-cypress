class progressBar {
    getProgressBarMenu() {
        return cy.get('span').contains('Progress Bar')
    }

    buttonStartStop() {
        return cy.get('#startStopButton')
    }

    
    buttonReset() {
        return cy.get('#resetButton')
    }

    getProgressBar() {
        return cy.get('[class*=progress-bar]', {"timeout":12000})
    }

}

export default progressBar
