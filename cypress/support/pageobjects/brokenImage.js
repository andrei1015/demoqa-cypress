class Image {

    getBrokenLinks() {
        return cy.get('span').contains('Broken Links - Images')
    }

    getBrokenImage() {
        return cy.get('[class*=col-md-6] img').last()
    }

    
}

export default Image
