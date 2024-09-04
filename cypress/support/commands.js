// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('invokeTransactionHistoryEndpoint', (model, count) => {
    return cy.request({
        method: model.requestType,
        url: Cypress.env('baseUrl') + 'Transaction/TransactionHistory?fromDate=01%2F08%2F2024&fundingSource=&isPast=true&page=' + count + '&pagesize=' + model.pageSize + '&processingSchedule=&selectedReseller=AllReseller&toDate=31%2F08%2F2024',
        failOnStatusCode: false,
        headers: {
            'Cookie': model.cookie
        },
    }).then((response) => {
        return response
    })
});