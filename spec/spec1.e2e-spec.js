describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        // Load the AngularJS homepage.
        browser.get('http://www.angularjs.org');
        throw new Error(1);
        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        var nameElement = element(by.model('yourName'));
        nameElement.sendKeys('Julie');

        // Find the element with binding matching 'yourName' - this will
        // find the <h1>Hello {{yourName}}!</h1> element.
        var greeting = element(by.binding('yourName'));

        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.
        expect(greeting.getText()).toEqual('Hello Julie!');
    });

    it('should use search', function () {
        browser.get('https://angular.io/docs');
        var searchFieldElement = $('[aria-label="search"]');
        searchFieldElement.sendKeys('Protractor');
        searchFieldElement.sendKeys(protractor.Key.ENTER);
        browser.sleep(1000); // только для демонстрации
        expect($('.search-results').isDisplayed()).toBe(true);
    });
});