describe('home page', () => {

    beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display the header', () => {
    cy
    .get('h1')
    .contains('Turing Cafe Reservations')
  })

  it('Should display current reservations', () => {
      cy
      .get('.res-card').first()
      .get('h4').contains('Christie')
      .get('p').contains('12/29')
      .get('p').contains('7:00 PM')
      .get('p').contains('Number of guests:12')
  })

  it('Should update form as typing', () => {
      cy
      .get('input[name="name"]')
      .type('Owen')
      .should('have.value', 'Owen')
      .get('input[name="date"]')
      .type('12/20')
      .should('have.value', '12/20')
  })

  it('Should be able to add reservation', () => {
      cy
      .get('input[name="name"]')
      .type('Owen')
      .get('input[name="date"]')
      .type('12/20')
      .get('input[name="time"]')
      .type('4:00')
      .get('input[name="number"]')
      .type('5')
      .get('button').click()
      .get('.res-card').last()
      .get('h4').contains('Owen')
      .get('p').contains('12/20')
      .get('p').contains('4:00 PM')
      .get('p').contains('Number of guests:5')
  })
})