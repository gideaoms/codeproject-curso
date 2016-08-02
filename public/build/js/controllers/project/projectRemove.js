/**
 * Created by Gideao on 07/06/2016.
 */
angular.module('app.controllers')
    .controller('ProjectRemoveController', ['$scope', '$location', '$routeParams', 'Project',
        function($scope, $location, $routeParams, Project) {
            $scope.project = Project.get({id: $routeParams.id});

            $scope.remove = function() {
                console.log($scope.project);
                $scope.project.$delete({id: $scope.project.id}).then(function() {
                    $location.path('/projects');
                });
            };
        }
    ]);