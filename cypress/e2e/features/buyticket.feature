Feature: Compra ticket
    compra de un boleto de avion ida y vuelta Barcelona-Madrid

Background: 

    Given usuario de vueling ingresa a vueling
Scenario: Compra ticket correcto
    When acepta todos los cookies
    And selecciono un vuelo de Barcelona a Madrid
    And selecciono un vuelo de Madrid a Barcelona
    And Selecciona la fecha de partida
    And Selcciona la fecha de regreso
    And Selecciona la cantidad de personas adultas
    And Selcciona la cantidad de niños
    And selecciono el boton buscar vuelo
    Then compra realiza con exito