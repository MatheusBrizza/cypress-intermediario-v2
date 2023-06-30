describe('Criar projeto no GitLab', () => {
    beforeEach(function() {
      cy.login()
    })
    it('Criar projeto pelo GUI', () => {
      cy.criarProjeto()
    })
  })