(function() {
  'use strict';

  angular
    .module('app')
    .factory('localstorage', localstorage);

  function localstorage() {
    var service = {
      push,
      retrieve
    };

    return service;

    function push(keyName, keyValue) {
    	var keyArray = JSON.parse(localStorage.getItem(keyName)) || [];
    	keyArray.push(keyValue);
    	localStorage.setItem(keyName, JSON.stringify(keyArray));
    }

    function retrieve(keyName) {
    	var k = JSON.parse(localStorage.getItem(keyName)) || [];
    	return k;
    }
  }
})();
