describe('logout GitLab', () => {
    beforeEach(function() {
      cy.login()
      cy.visit('/')
    })
    it('fazer logout clicando no avatar e clicando no botão sign out', () => {
      cy.logout()
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })