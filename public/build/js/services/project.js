/**
 * Created by Gideao on 14/06/2016.
 */
angular.module('app.services')
    .service('Project', ['$resource', '$filter', '$httpParamSerializer', 'appConfig',
        function($resource, $filter, $httpParamSerializer, appConfig) {
            return $resource(appConfig.baseUrl + '/project/:id', {id: '@id'}, {
                save: {
                    method: 'POST',
                    transformResponse: function(data) {
                        /* trnsformando a data para enviar yyyy-MM-dd masparece q nao está passando aqui */
                        if (angular.isObject(data) && data.hasOwnProperty('due_date')) {
                            data.due_date = $filter('date')(data.due_date, 'yyyy-MM-dd');
                            return $httpParamSerializer(data);
                        }
                        return data;
                    }
                },
                update: {
                    method: 'PUT'
                }
            });
        }
    ]);
