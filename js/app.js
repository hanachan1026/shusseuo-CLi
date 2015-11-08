angular.module('ngrepeatSelect', [])
 .controller('ExampleController', ['$scope', '$http', function($scope, $http) {
   $scope.data = {
    selected: null,
    availableOptions: [
      {value: 'kansai',   name: '関西'},
      {value: 'kanto',    name: '関東'},
      {value: 'shikoku',  name: '四国'},
      {value: 'tohoku',   name: '東北'},
      {value: 'hokuriku', name: '北陸'},
      {value: 'kishu',    name: '紀州'},
      {value: 'sanin',    name: '山陰'},
      {value: 'toyama',   name: '富山'},
      {value: 'shimokita',name: '下北'},
      {value: 'tango',    name: '丹後'},
      {value: 'shikoku',  name: '四国'},
      {value: 'kyushu',   name: '九州'},
    ],
   };
   // $scope.result = null;
   $scope.change = function() {
      var path = "https://shusse-uo.herokuapp.com/api/v1/place/" + $scope.data.selected;
      $http({
          url: path,
          method: "POST",
      }).success(function(data, status, headers, config) {
          // var a = JSON.parse(data);
          var text = "";
          data[0]["promotionList"].forEach(function(b){
            text += b + '\n';
          });
          $scope.result = text;
          console.log($scope.result);
      }).error(function(data, status, headers, config) {
          $scope.status = status;
      });
   };
}]);