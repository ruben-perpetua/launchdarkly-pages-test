context('Visibilities', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:3000')
	})

	it('Check if scroll down button is working', () => {
		cy.get('#nav > li:nth-child(1)').should('have.class', 'current');
		cy.get('.icon-down-circle').click();
		cy.url().should('include', '#about');
		cy.get('#nav > li:nth-child(1)').should('not.have.class', 'current');
		cy.get('#nav > li:nth-child(2)').should('have.class', 'current');
		cy.scrollTo('bottom');
		cy.get('#nav > li:nth-child(5)').should('have.class', 'current');
		
		cy.get('.icon-up-open').click();
		cy.get('#nav > li:nth-child(1)').should('have.class', 'current');
	})

});