import "./myDirective.tpl.html";

var myDirective = function ($rootScope, myService, myOtherService) {
    return {
        restrict: 'E',
        scope: {
            myValue: '=?'
        },
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'myDirective.tpl.html',
        controller: function () {
            var that = this;
            that.myOtherValue = myService.someValue;
            that.createAnException = function() {
                myService.createAnException();
            };
        }
    };
};

myDirective.$inject = ['$rootScope', 'myService', 'myOtherService'];

export default myDirective;