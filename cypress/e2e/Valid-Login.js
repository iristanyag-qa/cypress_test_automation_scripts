describe('Valid-Login', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="primary-header"] div.app_logo').should('have.text', 'Swag Labs');
    cy.get('[data-test="title"]').should('have.text', 'Products');
    cy.get('[data-test="item-4-title-link"] [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').should('be.visible');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
  })
})