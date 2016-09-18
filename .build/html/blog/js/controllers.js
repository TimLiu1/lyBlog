var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('BlogCtrl', ['$scope', '$ngBootbox',
    function ($scope, $ngBootbox) {
        $scope.node = "beautiful world";
        $scope.alertModel = function () {
            $ngBootbox.customDialog({
                title: "请选择产品",
                templateUrl: "/html/blog/partials/checkDialog.html",
                show: true,
                backdrap: true,
                animate: true,
                size:'small',
                buttons: {
                    success: {
                        label: "OK",
                        className: "btn-primary",
                        callback: function () {
                            var status = $("input[name='checkResult']:checked").val();
                            var reason = $("#checkReason").val();
                            console.log(status);
                            console.log(reason);
                        }
                    }
                    ,
                    warning: {
                        label: "Cancel",
                        className: "btn-default"
                    }
                }
            })
        }

        $scope.prop = function () {
            $ngBootbox.prompt('Enter something')
                .then(function (result) {
                    console.log('Prompt returned: ' + result);
                }, function () {
                    console.log('Prompt dismissed!');
                });
        }
    }])