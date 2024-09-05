/// <reference types="cypress" />

class PerformanceModule {
    performanceTesting(model) {
        var i = 1;
        for (i = 1; i <= model.maxAttempt ; i++) {
            cy.log('Attempt # ' + i + ' to access the Transaction History endpoint.')
            cy.invokeTransactionHistoryEndpoint(model, i).then((apiResponse) => {
                expect(200).to.equal(apiResponse.status);
            })
        }
    }
}

export default new PerformanceModule();