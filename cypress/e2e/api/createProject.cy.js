import { faker } from '@faker-js/faker'

describe('Create Project', () => {
  beforeEach(function () {
    cy.api_deleteProjects()
  })

  it('successfully', () => {
    const projeto = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.api_criarProjeto(projeto)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(projeto.name)
        expect(response.body.description).to.equal(projeto.description)
      })
  })
})
