describe('some protractor test', function() {
  it('should contain the test text', function() {
    browser.get('http://localhost:8080');

    var testDivs = element.all(by.id('some-id'));
    testDivs.then(function() {
      console.log('starting waiting.')
      setTimeout(function() {
        console.log('finished waiting.')
      }, 5000);
    expect(testDivs.count()).toEqual(1)
    });
  });
});