describe('logout GitLab', () => {
    beforeEach(function() {
      cy.login()
    })
    it('fazer logout abrindo o menu de usuário no canto superior direito e pressionando o botão de sign out', () => {
      cy.logout()
      cy.get("[data-qa-selector='login_field']").should('be.visible')
    })
  })