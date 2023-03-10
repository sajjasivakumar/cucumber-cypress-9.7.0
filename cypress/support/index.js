// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-cucumber-attach-screenshots-to-failed-steps";
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
    cy.log('Global Before Hook');
  });
  
  after(() => {
    cy.log('Global After Hook');
  });

  beforeEach(() => {
    cy.log('Global Before Each Hook');
  })

  afterEach(() => {
    cy.log('Global After Each Hook');
  })

