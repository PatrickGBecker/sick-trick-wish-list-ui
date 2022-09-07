describe('User flow', () => {
  it('Should be able to load the page and render all elements', () => {
    cy.visit('http://localhost:3000/')
      .contains('Sick Trixx Wish List')
      .get('form')
        .get('select')
          .contains('Choose Stance')
        .get('input')
          .get('select')
           .contains('Choose Obstacle')
        .get('button')
          .contains('Add Your Trix!').click()
      .get('div')
        .should('have.class', 'trix-container')
      .get('div')
        .should('have.class', 'trix-card')
      .get('p')
        .contains('regular treflip')
      .get('p')
        .contains('Obstacle: flat ground')
      .get('a')
        .contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
  });

  it('Should be able to add input information to the form, submit that info and see it on the page', () => {
    cy.visit('http://localhost:3000/')
      .get('select[name="stance"]')
        .select('Switch')
      .get('input[name="name"]')
        .type('Drunken Capybara')
      .get('select[name="obstacle"]')
        .select('Pool')
      .get('input[name="tutorial"]')
        .type('https://www.youtube.com/watch?v=kRuqoteUcDw')
      .get('button').click()
      .get('p')
        .contains('Drunken Capybara')
  });
  
});
