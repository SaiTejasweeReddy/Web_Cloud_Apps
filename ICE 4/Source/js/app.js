'use strict';
/* App Controllers */


var memoryGameApp = angular.module('memoryGameApp', []);


memoryGameApp.factory('game', function() {
  var tileNames = ['twitter', 'pooh', 'dora', 'scooby', 'mickey',
    'that-guy', 'pikachu', 'pencil', 'dice', 'nataraja'];

  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});
