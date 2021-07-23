// Cypress MVP Tests
//
// Set up variables
const specialInput = () => cy.get('input[id="name-input"]')
const toppingsInput = () => cy.get('input[id="name-input"]')
const submitBtn = () => cy.get('button[id="submit-btn"]')

describe('Cypress MVP Tests', {

  // 1. Test that you can add text to the box
  it('Can add text to the box', () => {
    specialInput('')
  })

  // 2. Test that you can select multiple toppings
  it('Can select multiple toppings', () => {
    toppingsInput('')    
  })

  // 3. Test that you can submit the form
  it('Can submit the form', () => {
    submitBtn('')    
  })
  
})