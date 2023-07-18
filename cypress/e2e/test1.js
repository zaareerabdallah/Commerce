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
        

        let firstname=['abd','khaled','sami','yazan','yaqeen','louna'];
        let lastname=['alahmad','alzaareer','zaareer','harb','harbi'];
        let a=Math.floor(Math.random()*firstname.length);
        let b=Math.floor(Math.random()*lastname.length);
        //console.log(firstname[a]+" "+lastname[b])
        let n=Math.floor(Math.random()*(50000)).toString();

       
        let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()";
        let string_length = 8;
        let password = '';
        for (let i=0; i<string_length; i++) {
            let rnum = Math.floor(Math.random() * chars.length);
            password += chars.substring(rnum,rnum+1);
        }
    console.log(password)
       
        
         cy.visit('https://demo.nopcommerce.com/')
         cy.get('.ico-register').click()
         cy.get('#gender-male').check()
         cy.get('#FirstName').type(firstname[a])
         cy.get('#LastName').type(lastname[b])
         cy.get('[name="DateOfBirthYear"]').select("1995")
         cy.get('[name="DateOfBirthMonth"]').select("May")
         cy.get('[name="DateOfBirthDay"]').select("9")
         cy.get('#Email').type(firstname[a]+"."+lastname[b]+n+"@gmail.com")
         cy.get('#Company').type("Epro")
         cy.get('#Newsletter').uncheck()

        

         cy.get('#Password').type(password)
         cy.get('#ConfirmPassword').type(password)
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