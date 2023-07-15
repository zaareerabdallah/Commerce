/// <reference types = "Cypress" />


beforeEach(()=>{
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload();
});


describe("nopcommerce advance automation cypress",()=>{
 
        it('register username',()=>{
    
         cy.visit('https://demo.nopcommerce.com/')
         cy.get('.ico-register').click()
         cy.get('#gender-male').check()
         cy.get('#FirstName').type("yaseen")
         cy.get('#LastName').type("salem")
         cy.get('[name="DateOfBirthYear"]').select("1995")
         cy.get('[name="DateOfBirthMonth"]').select("May")
         cy.get('[name="DateOfBirthDay"]').select("9")
         cy.get('#Email').type("yaseen.salem@gmail.com")
         cy.get('#Company').type("Epro")
         cy.get('#Newsletter').uncheck()
         cy.get('#Password').type("12345678")
         cy.get('#ConfirmPassword').type("12345678")
         cy.get('#register-button').click()
         cy.get('.result').invoke("text").should('match',/(Your registration completed)/i)
          
    });
    it('Add to cart anything ',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#customerCurrency').select("Euro")
        cy.get('img[title="Show products in category Electronics"]').click()
        cy.get('img[title="Show products in category Camera & photo"]').click()
        cy.get('img[title="Show details for Nikon D5500 DSLR"]').click()
        cy.get('#add-to-cart-button-14').click()
        cy.get('.mobile > :nth-child(1) > [href="/computers"]').click({force: true})// note: please I need id for navbar
        cy.get("img[title='Show products in category Notebooks']").click()
        cy.get('#attribute-option-7').check()
        cy.get('#attribute-option-9').check()
        cy.contains('button','Add to cart').click()
        // cy.get("img[title='Show details for HP Envy 6-1180ca 15.6-Inch Sleekbook']").click()
        //cy.get('#add-to-cart-button-8').click()//please I need id for add to cart computer
        cy.get('.ico-cart').click()
        
    })


 });