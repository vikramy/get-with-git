/*globals angular */

(function () {
    'use strict';

    var configCommandRoutes = function ($stateProvider) {
            $stateProvider
                .state("commands", {
                    abstract    : true,
                    url         : '/commands',
                    templateUrl : '/app/commands/commands.html'
                })

                .state("commands.command", {
                    url         : '/:commandName',
                    templateUrl : function ($stateParams) {
                        return '/app/commands/' + $stateParams.commandName + '.html';
                    }
                });
        };

    angular.module('getWithGit.commands', ['ui.router'])
           .config(['$stateProvider', configCommandRoutes]);
}());