
context('Testing Instagram', () => {

    
    it('Visiting Intagrame s Page', () => {

        cy.visit('https://www.instagram.com/');
        cy.get('.HmktE > :nth-child(4)').click();
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('holaaaa amigos')

    });

    
    // it('Nombre De La Prueba 2', () => {

    //     cy.visit('https://www.google.com/');

    //     cy.get('.gLFyf').type('GeekHubs');

    //     cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click();

    //     cy.get('[href="https://geekshubs.com/"] > .LC20lb').click();

    // });

});