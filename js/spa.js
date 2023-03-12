var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when("/category/:id", {
        templateUrl: "category/products.html",
        controller:"categoryCtrl"
    })
    // .otherwise({
    //     redirectTo:'/index.html'
    // });
});
app.run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function(){
        $rootScope.loading = false;
        alert('Lỗi, Không tìm thấy trang');
    });
});
app.controller("categoryCtrl", function ($scope, $routeParams){
    $scope.title1 = "Chăm sóc da";
    $scope.products = [
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/center.png",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/center.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000 
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000 
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/center.png",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/center.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000 
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000 
        },
        {
            name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
            image: "img/img/new/bottom.png.webp",
            price: 1640000
        }
    ];
    $scope.id = $routeParams.id;
    
    $scope.begin = 0;
    $scope.pageSize = 4;
    $scope.repaginate = function(){
        $scope.begin = 0;
        $scope.pageCount = Math.ceil($scope.products.length/$scope.pageSize);
    };
    app.directive("converToNumber", function(){
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(val) {
                    return parseInt(val, 10);
                });
                ngModel.$formatters.push(function(val) {
                    return '' + val;
                });
            }
        };
    });
});

