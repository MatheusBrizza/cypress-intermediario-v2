describe('logout GitLab', () => {
    beforeEach(function() {
      cy.login()
    })
    it('fazer logout clicando no avatar e clicando no botão sign out', () => {
      cy.logout()
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })