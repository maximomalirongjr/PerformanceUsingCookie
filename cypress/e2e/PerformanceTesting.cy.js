/// <reference types="cypress" />

import data from "../fixtures/data.json";

describe('Performance testing', () => {
    it('PageSize=5', () => {
        var i = 1;
        for (i = 1; i < 50 ; i++) {
            cy.log('Attempt # ' + i + ' in accessing Transaction History endpoint')
            cy.invokeTransactionHistoryEndpoint(data.test5, i).then((apiResponse) => {
                expect(200).to.equal(apiResponse.status);
            })
        }
    });

    it('PageSize=10', () => {
        var i = 1;
        for (i = 1; i < 40 ; i++) {
            cy.log('Attempt # ' + i + ' in accessing Transaction History endpoint')
            cy.invokeTransactionHistoryEndpoint(data.test10, i).then((apiResponse) => {
                expect(200).to.equal(apiResponse.status);
            })
        }
    });

    it('PageSize=20', () => {
        var i = 1;
        for (i = 1; i < 30 ; i++) {
            cy.log('Attempt # ' + i + ' in accessing Transaction History endpoint')
            cy.invokeTransactionHistoryEndpoint(data.test20, i).then((apiResponse) => {
                expect(200).to.equal(apiResponse.status);
            })
        }
    });

    it('PageSize=50', () => {
        var i = 1;
        for (i = 1; i < 20 ; i++) {
            cy.log('Attempt # ' + i + ' in accessing Transaction History endpoint')
            cy.invokeTransactionHistoryEndpoint(data.test50, i).then((apiResponse) => {
                expect(200).to.equal(apiResponse.status);
            })
        }
    });
})