app.controller('valuesCtrl', ['$scope', '$rootScope', 'ValuesService', function ($scope, $rootScope, ValuesService)
{
    $scope.error = "";
    $scope.loadingMsg = "Loading...";
    $scope.valuesList = [];

    $scope.Populate = function ()
    {
        ValuesService.getItems().success(function (results)
        {
            $scope.valuesList = results;
            $scope.loadingMsg = "";
        }).error(function (err)
        {
            $scope.error = err;
            $scope.loadingMsg = "";
        })
    };

}]);
