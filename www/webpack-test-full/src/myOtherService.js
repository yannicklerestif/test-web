var myOtherService = function myOtherService($rootScope) {

    var that = this;

    that.someOtherValue = Math.random();

    console.log('value in myOtherService : ' + that.someOtherValue);

    return that;
};

myOtherService.$inject = ['$rootScope'];

export default myOtherService;

// angular.module('myModule').factory('myOtherService', ['$rootScope', function($rootScope) {
//
//     var that = this;
//
//     that.someOtherValue = Math.random();
//
//     console.log('value in myOtherService : ' + that.someOtherValue);
//
//     return that;
// }]);