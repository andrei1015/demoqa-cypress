class DragAndDrop {

    getDragAndDrop() {
        return cy.get('span').contains('Droppable')
    }  
    
    dragMe() {
        return cy.get('#draggable')
    }

    dragZone() {
        return cy.get('#droppable')
    }
}

export default DragAndDrop
