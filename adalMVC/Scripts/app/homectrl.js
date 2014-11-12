app.controller('homeCtrl', ['$scope', 'adalAuthenticationService', '$location', function ($scope, adalAuthenticationService, $location)
{
    $scope.isActive = function (viewLocation)
    {
        return viewLocation === $location.path();
    };
    $scope.Login = function ()
    {
        adalAuthenticationService.login();
    };
    $scope.Logout = function ()
    {
        adalAuthenticationService.logOut();
    };
}]);