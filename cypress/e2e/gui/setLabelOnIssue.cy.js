import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }


describe('Inserir label em issue', options, () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        projeto: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    const label = {
        name: `label-${faker.random.word()}`,
        color: '#ffaabb'
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_criarIssue(issue)
            .then(response => {
                cy.api_createLabel(response.body.project_id, label)
                cy.visit(`${Cypress.env('user_name')}/${issue.projeto.name}/issues/${response.body.iid}`)
            })
    })

    it('successfully', () => {
        cy.gui_setLabelOnIssue(label)

        cy.get('.qa-labels-block').should('contain', label.name)
        cy.get('.qa-labels-block span')
            .should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
    })
})