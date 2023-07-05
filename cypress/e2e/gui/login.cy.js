describe('login GitLab', () => {
 
  it('fazer login inserindo usuário e senha', () => {
    cy.login()
    cy.visit('/')

    cy.get('.qa-user-avatar').should('be.visible')
  })
})