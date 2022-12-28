import { And, Given, Then, When, } from "@badeball/cypress-cucumber-preprocessor";

Given('usuario de vueling ingresa a vueling',()=>{
    cy.visit('https://www.vueling.com/es')
})

When('acepta todos los cookies',()=>{
    cy.get('#onetrust-accept-btn-handler').click()
});

And('selecciono un vuelo de Barcelona a Madrid',()=>{
    cy.get('.origin').click()
    cy.get('.searchbar-popup_header_search > .ng-pristine').type('Barcelona España BCN')
    cy.get('.liStation',{timeout:10000}).click()
});

And('selecciono un vuelo de Barcelona a Madrid',()=>{
    cy.get('.searchbar-popup_header_search > .ng-pristine').type('Madrid España MAD')
    cy.get('.liStation',{timeout:10000}).click()
})

And('Selecciona la fecha de partida',()=>{
    cy.get('#calendarDaysTable2023031 > .ui-state-default',{timeout:10000}).click()
});

And('Selcciona la fecha de regreso',()=>{
    cy.get('#calendarDaysTable2023031 > .ui-state-default',{timeout:10000}).click()
});

And('Selecciona la cantidad de personas adultas',()=>{
    cy.xpath('//*[@id="adultsIncrease"]').click()
});

And('Selcciona la cantidad de niños',()=>{
    cy.xpath('//*[@id="childrenIncrease"]').click()
});

And('selecciono el boton buscar vuelo',()=>{
    cy.get('.passengers-popup_action > .mv_button').click()
    cy.intercept('POST','https://vueling-app.quantummetric.com/**').as('varLink')
    cy.wait('@varLink').then((respon)=>{
        console.log(respon)
    })
    
});


Then('compra realiza con exito',()=>{

    cy.url().should('contain','*/vueling/*')
    
})