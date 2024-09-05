/// <reference types="cypress" />

import data from "../fixtures/data.json";
import PerformanceModule from "./PerformanceModule.js";

describe('Performance testing', () => {
    it('PageSize', () => {
        PerformanceModule.performanceTesting(data.test);
    });
})