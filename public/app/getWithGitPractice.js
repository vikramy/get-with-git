/*globals angular */

(function () {
    'use strict';

    var configPracticeRoutes = function ($stateProvider) {
            $stateProvider
                .state("practice", {
                    abstract    : true,
                    url         : '/practice',
                    templateUrl : '/app/practice/practice.html'
                })

                .state("practice.step", {
                    url         : '/:practiceStep',
                    templateUrl : function ($stateParams) {
                        return '/app/practice/' + $stateParams.practiceStep + '.html';
                    }
                });
        };

    angular.module('getWithGit.practice', ['ui.router'])
           .config(['$stateProvider', configPracticeRoutes]);
}());