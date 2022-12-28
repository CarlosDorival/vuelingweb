
describe('Buy ticket Feature', ()=> {

    it('Success buy ticket',()=> {

    
        cy.visit('https://www.vueling.com/es')


        
        //aceptar los politicas de cookies
        cy.get('#onetrust-accept-btn-handler').click()

        //seleccionar origen barcelona
        cy.get('.origin').click()
        cy.get('.searchbar-popup_header_search > .ng-pristine').type('Barcelona España BCN')
        cy.get('.liStation',{timeout:10000}).click()
        //cy.get('.liStation').click()
        
        //seleccionar destino Madrid
        cy.get('.searchbar-popup_header_search > .ng-pristine').type('Madrid España MAD')
        cy.get('.liStation',{timeout:10000}).click()

        //seleccionar fecha de salida

        cy.get('#calendarDaysTable2023031 > .ui-state-default',{timeout:10000}).click()
        

        //seleccionar fecha de vuelta

        cy.get('#calendarDaysTable2023031 > .ui-state-default',{timeout:10000}).click()


        // seleccionar cantidad de personas adultos
        cy.xpath('//*[@id="adultsIncrease"]').click()

        //seleccionar cantidad de perosnas niños
        cy.xpath('//*[@id="childrenIncrease"]').click()

        //hacer clic en el boton continuar
        cy.get('.passengers-popup_action > .mv_button').click()
    
        //buscar vuelo

        cy.intercept('POST','https://vueling-app.quantummetric.com/**').as('varLink')


        
        //cy.get('#btnSubmitHomeSearcher').click()

        cy.wait('@varLink').then((respon)=>{
            console.log(respon)
        })
        
        
        
    
    })
    
})
