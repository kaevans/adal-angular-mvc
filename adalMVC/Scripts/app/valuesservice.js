'use strict';
app.factory('ValuesService', ['$http', function ($http)
{
    var serviceFactory = {};

    var _getItems = function ()
    {
        return $http.get('/api/Values');
    };

    var _getItem = function (id)
    {
        return $http.get('/api/Values/' + id);
    };

    var _postItem = function (data)
    {
        return $http.post('/api/Values/', data);
    };

    var _putItem = function (data)
    {
        return $http.put('/api/Values/', data);
    };

    var _deleteItem = function (id)
    {
        return $http({
            method: 'DELETE',
            url: '/api/Values/' + id
        });
    };

    serviceFactory.getItems = _getItems;
    serviceFactory.getItem = _getItem;
    serviceFactory.deleteItem = _deleteItem;
    serviceFactory.postItem = _postItem;
    serviceFactory.putItem = _putItem;

    return serviceFactory;

}]);