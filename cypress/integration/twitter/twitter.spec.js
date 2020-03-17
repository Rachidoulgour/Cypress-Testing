context('Testing Twitter', () => {

    // Con 'it' creamos nuestra 1º Prueba
    it('Visiting Youtube Page', () => {

        cy.visit('https://www.twitter.com');

    });

    // Volvemos a Crear Otra Prueba Diferente
    it('Testing some buttons', () => {

         cy.visit('https://www.twitter.com/');

         cy.get('[data-testid=signupButton] > .r-1awozwy').click();

         cy.get('.r-xx1rs6 > .css-18t94o4 > .css-901oao').click();
         cy.get(':nth-child(3) > .r-1u4rsef > :nth-child(1) > .css-1dbjc4n > .css-901oao > .r-30o5oe').click().type('rachidoulgour83@gmail.com');
         cy.get(':nth-child(2) > .r-1u4rsef > :nth-child(1) > .css-1dbjc4n > .css-901oao > .r-30o5oe').type('rachid');
         cy.get('.r-obd0qt > .css-18t94o4 > .r-1awozwy').click();
    //     cy.get('[href="https://geekshubs.com/"] > .LC20lb').click();

    });

});