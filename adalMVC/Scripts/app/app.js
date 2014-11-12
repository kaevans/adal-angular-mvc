'use strict';
var app = angular.module('app', [
    'ngRoute',
    'AdalAngular'
]);

// version 1
app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalAuthenticationServiceProvider)
{

    $routeProvider.when("/home", {
        controller: "homeCtrl",
        templateUrl: "App/Home",        
    }).when("/values", {
        controller: "valuesCtrl",
        templateUrl: "App/Values",
        requireADLogin: true,
    }).otherwise({ redirectTo: "/home" });

    

    //Uses local storage based on domain name.  Running multiple
    //  apps in "localhost" causes a conflict.  Uncomment the following
    //  code to clear the cache for debugging purposes.

    //var ctx = new AuthenticationContext({
    //    tenant: 'fabrikam.onmicrosoft.com',
    //    clientId: 'aaaaaaaa-ffff-8888-9999-ffffffffffff',
    //    extraQueryParameter: 'nux=1'
    //});
    //ctx.clearCache();
    //ctx.clearCacheForResource('0ac3d86b-ff49-48e2-98f3-102d3938b88f');

    adalAuthenticationServiceProvider.init(
        {
            tenant: 'your tenant ID here',                      //ex: fabrikam.onmicrosoft.com
            clientId: 'your client ID here',                    //ex: aaaaaaaa-ffff-8888-9999-ffffffffffff
            extraQueryParameter: 'nux=1'
        },
        $httpProvider   // pass http provider to inject request interceptor to attach tokens
        );

}]);