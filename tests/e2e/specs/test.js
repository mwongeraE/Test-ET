describe('Root Test', () => {
  it('Visits root url', () => {
    cy.visit('/')
    cy.contains('h1', '')
  })
})
