/**
 * Created by Gideao on 07/06/2016.
 */
angular.module('app.controllers')
    .controller('ProjectNewController', ['$scope', '$location', '$cookies', 'Project', 'Client', 'appConfig',
        function($scope, $location, $cookies, Project, Client, appConfig) {
            $scope.project = new Project();
            $scope.clients = Client.query();
            $scope.status = appConfig.project.status;

            console.log($cookies.getObject('user'));

            $scope.save = function() {
                if ($scope.form.$valid) {
                    $scope.project.owner_id = $cookies.getObject('user').id;
                    $scope.project.$save().then(function () {
                        $location.path('/projects');
                    });
                }
            };
        }
    ]);