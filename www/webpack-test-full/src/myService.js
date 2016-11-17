var myService = function(myOtherService) {

    var that = this;
    
    that.someValue = myOtherService.someOtherValue;

    that.createAnException = function() {
        throw new Error('some exception');
    };
    
    console.log('value in myService : ' + that.someValue);
    
    return that;
};

myService.$inject = ['myOtherService'];

export default myService;