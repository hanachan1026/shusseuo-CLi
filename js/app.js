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
          angular.element("#result").children().remove();
          var promotionList = data[0]["promotionList"];
          var array = new Array();
          $.each(promotionList, function(index){
            if (this =="ブリ") {
              var li = "<li class='result stylie" + index + "' style='color: red'>" + this + "</li>";
              array.push(li);
            }else {
              var li = "<li class='result stylie" + index + "'>" + this + "</li>";
              array.push(li);
            };
            return array;
          });
          $.each(array, function(index){
            angular.element("#result").append(this);
          });
          angular.element(".result").hide();

          for (var i = 0; i <= array.length - 1; i++) {
            var stylies = ".stylie" + i;
            var j = i + 1;
            var scale = "scale(" + j +")";
            console.log(stylies);
            angular.element(stylies).delay(i * 1000).queue(function(next) {

              $(this).show();
              $(this).jqFloat({
                width:0,
                height: 20,
                speed: 1500
               });
              $(this).parent().css("display", "inline-block")

              next();
            });
          };
      }).error(function(data, status, headers, config) {
          $scope.status = status;
      });
   };
}]);


