angular.module('App', [])
  .controller('AppController', ($scope, $http) => {
            $http.get('/get')
                .then(response => {
                    $scope.quotes = response.data;
                })

            $scope.delete = item => {
                console.log(item, "asdfasdf");
                $http.post('/delete', item)
            }
  })