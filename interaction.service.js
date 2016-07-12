(function () {
  'use strict';

  angular
    .module('app')
    .service('interactionService', InteractionService);

  InteractionService.$inject = ['$http', '$q', 'appConfig'];

  /* @ngInject */
  function InteractionService($http, $q, appConfig) {
    //This appConfig is in a constants file
    var baseUrl = appConfig.api;

    this.get = get;
    this.post = post;

    ////////////////

    /**
     * Does something with the request success
     * @param {object} data - the data from the server 
     * @returns {object}
     */
    function complete(data) {
      //log if you want
      //Must always return to maintain chaining
      return data;
    }

    /**
     * Does something with the request error
     * @param {object} data - the data from the server
     * @returns {object}
     */
    function error(data) {
      //log if you want
      return data;
    }

     /**
     * Performs a get request
     * @param {string} url - The url to be used for the get
     * @param {bool} [isExternal=false]  - Flag that regulates if the baseUrl is prepended to the given url
     * @returns {HttpPromise}
     */
    function get(url, isExternal) {
      return $http.get(parseUrl(url, isExternal)).then(complete, error);
    }

    /**
     * Performs a post
     * @param {string} url - The url to be used for the post
     * @param data - The data to be sent in the post
     * @param {bool} [isExternal=false]  - Flag that regulates if the baseUrl is prepended to the given url
     * @returns {HttpPromise}
     */
    function post(url, data, isExternal) {
      return $http.post(parseUrl(url, isExternal), data).then(complete, error);
    }

    function parseUrl(url, isExternal) {
      if (!isExternal) {
        url = baseUrl + url;
      }

      return url;
    }
  }

})();
