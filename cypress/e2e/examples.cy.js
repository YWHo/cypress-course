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

    it('intercepts', () => {
        cy.intercept('POST', 'http://localhost:3000/examples', {
            fixture: 'example.json',
        })
        
        cy.getDataTest('post-button').click();
    })

    it.only('grudges', () => {
        cy.contains(/Add Some Grudges/i);

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0);
        })

        cy.getDataTest('clear-button').should('not.exist');

        cy.getDataTest('grudge-list-title').should('have.text', 'Add Some Grudges');

        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('grudge 1');
        })
        cy.getDataTest('add-grudge-button').click();

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1);
        })

        cy.getDataTest('grudge-list-title').should('have.text', 'Grudges');

        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('grudge 2');
        })
        cy.getDataTest('add-grudge-button').click();
        
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 2);
            cy.get('li').its(0).should('contains.text', 'grudge 1');
            cy.get('li').first().should('contains.text', 'grudge 1');
        })

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click();
            })
        })

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1);
        })

        cy.getDataTest('clear-button').click();

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0);
        })

        cy.getDataTest('clear-button').should('not.exist');
    })
})