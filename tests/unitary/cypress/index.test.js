const cypressConfig = require('../../e2e/cypress.json');

test('cypressConfig', () => {
    expect(cypressConfig).toEqual(
        {
            "baseUrl": "http://localhost:3000",
            "screenshotOnRunFailure": false,
            "trashAssetsBeforeRuns": false,
            "video": false
        }
    );
});