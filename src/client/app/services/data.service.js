(function() {
  'use strict';

  angular
    .module('app')
    .factory('dataservice', dataservice);

  function dataservice($http) {
    var service = {
      listTolkbacks
    };

    return service;

    function listTolkbacks() {
      return $http.get('/listTolkbacks')
        .then(function(response) {
          return response.data;
        })
        .catch(function(message) {
          console.log('XHR Failed for listTolkbacks: ' + message);
        });
    }
  }
})();
