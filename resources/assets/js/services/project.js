/**
 * Created by Gideao on 14/06/2016.
 */
angular.module('app.services')
        .service('Project', ['$resource', '$filter', '$httpParamSerializer', 'appConfig',
            function ($resource, $filter, $httpParamSerializer, appConfig) {
                function transformData(data) {
                    if (angular.isObject(data) && data.hasOwnProperty('due_date')) {
                        var obj = angular.copy(data);
                        obj.due_date = $filter('date')(data.due_date, 'yyyy-MM-dd');
                        return appConfig.utils.transformRequest(obj);
                    }
                    return data;
                }

                return $resource(appConfig.baseUrl + '/project/:id', {id: '@id'}, {
                    save: {
                        method: 'POST',
                        transformResponse: transformData
                    },
                    get: {
                        method: 'GET',
                        transformResponse: function (data, headers) {
                            var o = appConfig.utils.transformResponse(data, headers);
                            if (angular.isObject(o) && o.hasOwnProperty('due_date')) {
                                var arrayDate = o.due_date.split('-');
                                o.due_date = new Date(arrayDate[0], parseInt(arrayDate[1]) - 1, arrayDate[2]);
                            }
                            return o;
                        }
                    },
                    update: {
                        method: 'PUT',
                        transformResponse: transformData
                    }
                });
            }
        ]);
