// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionicSound' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var example = angular.module('ionicSound', ['ionic', 'angular-momentjs', 'ngCordova', 'plangular'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

example.controller("ExampleController", function($scope, $cordovaMedia, $ionicLoading) {
    $scope.play = function(src) {
        console.log('src: ' + src);
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    }

    var mediaStatusCallback = function(status) {
        if (status == 1) {
            $ionicLoading.show({ template: "Loading..." });
        } else {
            $ionicLoading.hide();
        }
    };
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        //controller: 'AppCtrl'
    })

    .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'homeService'
                }
            }
        })
        .state('app.bookmark', {
            url: "/bookmark",
            views: {
                'menuContent': {
                    templateUrl: "templates/bookmark.html",
                    //controller: 'BrowseCtrl'
                }
            }
        })
        .state('app.podcast', {
            url: "/podcast",
            views: {
                'menuContent': {
                    templateUrl: "templates/musolistPod.html",
                    controller: 'musolistPodCtrl'
                }
            }
        });
    $urlRouterProvider.otherwise('/app/home');
});