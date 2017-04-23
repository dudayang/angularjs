// ����ļ�
var app=angular.module("myapp",['ngRoute']);
app.controller("mainctrl",function($scope){
	$scope.person={
		name:"大力",address:"召唤师峡谷",zan:"80W",fans:"500W",
            introduce:"最强王者",head:"images/a10.jpg",
	};
    $scope.myvar = false;
    $scope.show = function(){
    $scope.myvar = !$scope.myvar;
    }         
});