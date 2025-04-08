describe('Cypress Playground', () => {

  beforeEach(() => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('shows a promotional-banner', () => {
    cy.get('#promotional-banner').should('be.visible')
  })

  it('click the Subscrible button and shows a success mensage', () => {
    cy.contains('button', 'Subscribe').click()
    cy.contains(
      '#success', 
      "You've been successfully subscribed to our newsletter.")
      .should('be.visible')
  });

  it('types in a input which "signs" a form, then asserts it is signed', () => {
    cy.get('#signature-textarea').type('Maurício Miranda')
    cy.contains('#signature', 'Maurício Miranda').should('be.visible')
  });

  it('types in the signature field, checks the checkbox to see the preview, then unchecks it', () => {
    cy.get('#signature-textarea-with-checkbox').type('Maurício Miranda')
    cy.get('#signature-checkbox').check()
    cy.contains('#signature-triggered-by-check', 'Maurício Miranda').should('be.visible')
    cy.get('#signature-checkbox').uncheck()
    cy.contains('#signature-triggered-by-check', 'Maurício Miranda').should('not.exist')
  });

  it('checks both possible radios and asserts if it is "on" or "off"', () => {
    cy.contains('#on-off', 'ON').should('be.visible')
    cy.get('#off').check()
    cy.contains('#on-off', 'OFF').should('be.visible')
    cy.contains('#on-off', 'ON').should('not.exist')
    cy.get('#on').check()
    cy.contains('#on-off', 'ON').should('be.visible')
    cy.contains('#on-off', 'OFF').should('not.exist')
  });
})
