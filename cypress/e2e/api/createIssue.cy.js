import { faker } from '@faker-js/faker'

describe('Creando issue por API', () => {
    beforeEach(() => {
        cy.api_deleteProjects()
    })

    it('successfully', () => {
        const issue = {
            title: `issue-${faker.datatype.uuid()}`,
            description: faker.random.words(3),
            projeto: {
                name: `project-${faker.datatype.uuid()}`,
                description: faker.random.words(5)
            }
        }

        cy.api_criarIssue(issue)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.title).to.equal(issue.title)
                expect(response.body.description).to.equal(issue.description)
            })
    })
})
