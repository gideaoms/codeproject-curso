/**
 * Created by Gideao on 14/06/2016.
 */
angular.module('app.services')
    .service('User', ['$resource', 'appConfig',
        function($resource, appConfig) {
            return $resource(appConfig.baseUrl + '/user', {}, {
                authenticated: {
                    url: appConfig.baseUrl + '/user/authenticated',
                    method: 'GET'
                }
            });
        }
    ]);