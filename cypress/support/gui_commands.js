// O comando Cypress.env busca os dados do arquivo cypress.env.json que foi criado antes, assim não precisa digitar eles toda vez e proteje dados sensíveis.
// No comando cy.visit não tem necessidade botar todo o url porque o começo já está definido em cypress.config.js
// no campo de password foi adicionado o log: false para que a senha não vaze nos logs.  
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'), 
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login()
  })

Cypress.Commands.add('logout', () => {
    const logout = () => {
        cy.get('.header-user-avatar').click()
        cy.get('.sign-out-link').click()
    }

    logout()
  })

Cypress.Commands.add('criarProjeto', (
    teste = 'teste'
    ) => {
    const createProject = () => {
        cy.contains('Create a project').click()
        cy.get('#project_name').type(teste)
        cy.get('#project_path').type(teste)
        cy.get('#blank-project-pane > #new_project > .btn-success').click()
    }

    createProject()
  })
  