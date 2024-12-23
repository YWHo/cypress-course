describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples');
    })

    it('Multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
        cy.location('pathname').should('eq', '/');

        cy.getDataTest('nav-why-overview').click();
        cy.location('pathname').should('eq', '/overview');

        cy.getDataTest('nav-why-fundamentals').click();
        cy.location('pathname').should('eq', '/fundamentals');

        cy.getDataTest('nav-why-forms').click();
        cy.location('pathname').should('eq', '/forms');
    })
})