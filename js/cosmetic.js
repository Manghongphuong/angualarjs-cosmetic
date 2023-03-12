    var app = angular.module("myApp", []);
        // app.controller("regisCtrl", function($scope){
        //     $scope.datas = [];
        //     if(localStorage.getItem('user-list')){
        //         $scope.datas = angular.fromJson(localStorage.getItem('user-list'));
        //     }
        //     $scope.add_user = function(){
        //         $scope.datas.push($scope.user);
        //         $scope.user = null;
        //         localStorage.setItem('user-list',angular.toJson($scope.datas));
        //         console.log($scope.datas);
        //     }
        // })
        app.controller("regisCtrl", function($scope){
            $scope.isLogin = true;
            $scope.datas = [
                {
                    name: "Hồng Phương",
                    email: "hphuong@gmail.com",
                    password: "123456",
                },
                {
                    name: "Admin",
                    email: "admin@gmail.com",
                    password: "1234567",
                }
            ];
            $scope.user = {};
            $scope.index = -1;
            $scope.add_user = function(){
                $scope.datas.push(angular.copy($scope.user));
                $scope.user = null;
            }
            // console.log($scope.datas);
            if(sessionStorage.getItem('login')){
                $scope.info = angular.fromJson(sessionStorage.getItem('login'));
                // console.log($scope.info);
            }
            $scope.login = function(){
                var user = check_login($scope.email, $scope.password);
                if(user){
                    //lưu thông tin user vào localStorage
                   sessionStorage.setItem('login', angular.toJson(user));
                   $('#exampleModal').modal('hide');
                }
                else{
                    $scope.isLogin = false;
                    alert("Sai tài khoản hoặc mật khẩu");
                }
            }

            function check_login(email, password){
                for(var i = 0; i < $scope.datas.length; i++){
                    if($scope.datas[i].email == email && $scope.datas[i].password == password){
                        return $scope.datas[i];
                    }
                }
                return false;
            }

            $scope.logout = function(){
                sessionStorage.removeItem('login');
                $scope.isLogin = false;
            }
        })
        app.controller("productCtrl", function ($scope) {
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
                    image: "img/img/new/center.png.webp",
                    price: 1640000 
                },
                {
                    name: "VALMONT LumiMask - Mặt nạ tái tạo bề mặt làm trắng da",
                    image: "img/img/new/center.png",
                    price: 1640000 
                }
                
            ];

        });

        app.controller("myctrl", function($scope, $http){
            $scope.products = [];
            $http.get("./js/donhang.js").then(function(response){
                $scope.products = response.data;
            });
            $scope.begin = 0;
            $scope.pageSize = 8;

            $scope.repaginate = function(){
                $scope.begin = 0;
                $scope.pageCount = Math.ceil($scope.products.length/$scope.pageSize);
            };
            $scope.sortBy = function(prop){
                $scope.prop = prop;
            };
        });
        app.filter('percentage', function($filter){
            return function(input, decimals){
                return $filter('number')(input * 100, decimals)+"%";
            };
        });