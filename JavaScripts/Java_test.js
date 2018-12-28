

var app = angular.module('testDirective', []);
app.controller('testController', testController)

function testController($scope) {
    $scope.list = [];
    $scope.FirstName = '';
    $scope.LastName = '';
    $scope.sSubmitButton = function () {
        if($scope.FirstName){
            $scope.list.push(this.FirstName);
            $scope.FirstName=''
            $scope.LastName = ''
            $scope.LastName = ''
        }
        
    };
};