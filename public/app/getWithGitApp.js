/*globals angular */

(function () {
    'use strict';
    var run = function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        },

        configRoutes = function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/');

            $stateProvider
                .state("home", {
                    url         : '/',
                    templateUrl : '/app/index/index.html'
                })

                .state("origin", {
                    url         : '/origin',
                    templateUrl : '/app/origin/origin.html'
                })

                .state("what-is-git", {
                    url         : '/what-is-git',
                    templateUrl : '/app/what-is-git/what-is-git.html'
                })

                .state("basics", {
                    url         : '/basics',
                    templateUrl : '/app/basics/basics.html'
                })

                .state("branching", {
                    url         : '/branching',
                    templateUrl : '/app/branching/branching.html'
                })

                .state("github", {
                    url         : '/github',
                    templateUrl : '/app/github/github.html'
                })

                .state("conclusion", {
                    url         : '/conclusion',
                    templateUrl : '/app/conclusion/conclusion.html'
                });
        };

    angular.module('getWithGit', [
        'getWithGit.commands',
        'getWithGit.practice',
        'ui.router',
        'ngAnimate'
    ])
           .run(['$rootScope', '$state', '$stateParams', run])
           .config(['$stateProvider', '$urlRouterProvider', configRoutes]);
}());