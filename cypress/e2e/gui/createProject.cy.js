import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Criar projeto no GitLab', options, () => {
  beforeEach(function () {
    cy.login()
  })
  it('Criar projeto pelo GUI', () => {
    const projeto = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
    cy.gui_criarProjeto(projeto)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${projeto.name}`)
    cy.contains(projeto.name).should('be.visible')
  })
})