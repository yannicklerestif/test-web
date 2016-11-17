import "./myStyleSheet.css";

import myOtherService from "./myOtherService.js";
import myService from "./myService.js";
import myDirective from "./myDirective.js";

angular.module('myModule', ['ngMaterial'])
    .factory('myService', myService)
    .factory('myOtherService', myOtherService)
    .directive('myDirective', myDirective);

//require('./myOtherService.js');

console.log('myModule created');
