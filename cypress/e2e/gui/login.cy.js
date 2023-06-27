describe('Página GitLab', () => {
  beforeEach(function() {
    cy.visit('http://localhost/users/sign_in')
  })
  it('fazer login inserindo usuário e senha', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})