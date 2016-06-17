/**
 * Created by Gideao on 07/06/2016.
 */
angular.module('app.services')
    .service('Client', ['$resource', 'appConfig',
        function($resource, appConfig) {
            return $resource(appConfig.baseUrl + '/client/:id', {id: '@id'}, {
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);