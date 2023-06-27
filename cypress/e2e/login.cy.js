describe('Página GitLab', () => {
  beforeEach(function() {
    cy.visit('http://localhost/users/sign_in')
  })
  it('fazer login inserindo usuário e senha', () => {
    cy.get('#user_login').type('root')
    cy.get('#user_password').type('leonkennedy')
    cy.get('#new_user > .submit-container > .btn').click()
  })
})