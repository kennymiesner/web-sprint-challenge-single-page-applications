// Cypress MVP Tests
//
// Set up variables
const sizeInput = () => cy.get('select[id="size-dropdown"]')
const nameInput = () => cy.get('input[id="name-input"]')
const specialInput = () => cy.get('input[id="special-text"]')
const toppingsInput = () => cy.get('input[type=checkbox]')
const submitBtn = () => cy.get('button[id="submit-btn"]')

describe('Cypress MVP Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })
  
  // // Testing setup
  // it('Testing setup', () => {
  //   expect(1+2).to.equal(3)
  //   expect(2+2).not.to.equal(5)
  // })

  // 1. Test that you can add text to the box(?)
  // I'm working on the assumption that this task is referring to
  // the text fields. The instructions are unclear in the README.md
  it('Can add text to the box', () => {
    nameInput()
      .should('have.value', '')
      .type('Kenny Miesner')
      .should('have.value', 'Kenny Miesner')
    specialInput()
      .should('have.value', '')
      .type('Please cook for extra time. Thanks!')
      .should('have.value', 'Please cook for extra time. Thanks!')
  })

  // // 2. Test that you can select multiple toppings
  it('Can select multiple toppings', () => {
    toppingsInput()
      .check() // Check all toppings
      .first().uncheck() // Uncheck first topping
  })

  // 3. Test that you can submit the form
  it('Can submit the form', () => {
    // Fill out form information
    sizeInput()
      .select('extra-large')
    toppingsInput()
      .check()
    nameInput()
      .should('have.value', '')
      .type('Kenny Miesner')
      .should('have.value', 'Kenny Miesner')
    specialInput()
      .should('have.value', '')
      .type('Please cook for extra time. Thanks!')
      .should('have.value', 'Please cook for extra time. Thanks!') 

    // Submit form
    // submitBtn()
    //   .click()

    // Test form reset
    sizeInput().should('have.value', '')
    toppingsInput().should('have.value', '')
    nameInput().should('have.value', '')
    specialInput().should('have.value', '')
  })
  
})