import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }

describe('Criar Issue em um projeto', options, () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
        projeto: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(function () {
        cy.login()
        cy.visit('/')

        cy.api_deleteProjects()
        cy.api_criarProjeto(issue.projeto)
    })


    it('criar Issue em um projeto novo', () => {

        cy.gui_criarIssue(issue)

        cy.get('.issue-details').should('contain', issue.title)
    })
})    