
import vendorPos from "/pageObjects/vendor-pos.js"

const vendorLogin = new vendorPos()

describe('Login Module', () => {

  beforeEach('Open URL', function () {
    cy.visit(Cypress.env('vendorStagingUrl'))
  })

    it('Verifies that user cannot login with empty email and password fields', function(){
        cy.contains('Account Login')
        cy.contains('Email/Phone Number')
        cy.contains('Password')
        vendorLogin.Email().clear()
        vendorLogin.Password().clear()
        vendorLogin.submitBtn().click()
        cy.contains('Please enter email/phone number')
        cy.contains('Please enter password')

    })

    it('Verifies that user cannot login with invaild email and invalid password', function(){
        vendorLogin.Email().clear().type("test@yopmail.com")
        vendorLogin.Password().clear().type("234##89")
        vendorLogin.submitBtn().click()
        vendorLogin.notificationModal().should("be.visible").and('contain.text', 'Login FailedAn error occurred during login. Please try again.')
   })

    it('Verifies that user cannot login with a valid email and invalid password ', function(){
        vendorLogin.Email().clear().type("olutan@yopmail.com")
        vendorLogin.Password().clear().type("234##89")
        vendorLogin.submitBtn().click()
        vendorLogin.notificationModal().should("be.visible").and('contain.text', 'Login FailedAn error occurred during login. Please try again.')
    })

    it('Verifies that user cannot login with a invalid email and valid password', function(){
        vendorLogin.Email().clear().type("heyaj644@yopmail.com")
        vendorLogin.Password().clear().type("password")
        vendorLogin.submitBtn().click()
        vendorLogin.notificationModal().should("be.visible").and('contain.text', 'Login FailedAn error occurred during login. Please try again.')
    })


    it('Verifies that user can login with valid email and password', function(){
        vendorLogin.Email().clear().type("olutan@yopmail.com")
        vendorLogin.Password().clear().type("password1")
        vendorLogin.submitBtn().click()
        cy.wait(5000)
        cy.contains('Dashboard')
    })

})
