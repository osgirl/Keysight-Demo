'use strict';
var app = angular.module('myKeysightApp', ['ui', 'ngDragDrop']);

app.controller('MainCtrl', function($scope, $timeout, $http) {

    $scope.addOrder = 0;
    $scope.instruction = true;
    $scope.activatedModules = [];


    $scope.moduleListOptions = {
        revert: 'invalid',
        tolerance: 'touch'
    };



    //to hold and obtain values from form
    $scope.values = {};


    $scope.theTest = function(paramvalue) {

        var answer = "";

        switch (paramvalue.name) {
            case 'Add':
                var funcresult = Number(paramvalue.values.field_Add0) + Number(paramvalue.values.field_Add1);

                answer = funcresult;
                break;

            case 'Subtract':
                var funcresult = Number(paramvalue.values.field_Subtract0) - Number(paramvalue.values.field_Subtract1);

                answer = funcresult;
                break;


            case 'Foo':
                var funcresult = Number(paramvalue.values.field_Foo0) + Number(paramvalue.values.field_Foo1) + Number(paramvalue.values.field_Foo2);

                answer = funcresult;
                break;

            case 'Complicated':
                var funcresult = (Number(paramvalue.values.field_Complicated0) + Number(paramvalue.values.field_Complicated1)) * (Number(paramvalue.values.field_Complicated2) +
                    Number(paramvalue.values.field_Complicated3)
                );



                answer = funcresult;
                break;

            default:
                answer = "Another Function";
        }




        $scope.funcanswer = answer;
        $scope.values = {};
        return answer;

    }




    var functionTags;
    functionTags = {
        "result": {
            "modules": [

                {
                    "name": "Add",
                    "active": "Y",
                    "color": "#E90129",
                    "fields": ["input1", "input2"],
                    "show": true
                },

                {
                    "name": "Subtract",
                    "active": "Y",
                    "color": "#E90129",
                    "fields": ["input1", "input2"],
                    "show": true
                },


                {
                    "name": "Foo",
                    "active": "Y",
                    "color": "#E90129",
                    "fields": ["input1", "input2", "input3"],
                    "show": true
                },


                {
                    "name": "Complicated",
                    "active": "Y",
                    "color": "#E90129",
                    "fields": ["input1", "input2", "input3", "input4"],
                    "show": true
                },

                {
                    "name": "Form 1",
                    "active": "Y",
                    "color": "#E90129",
                    "show": true
                },



            ]
        },
        "status": {
            "responseCode": 200,
            "responseMessage": "Success",
            "responseType": "info"
        }
    };

    $scope.startDrag = function(ui, event, item) {
        $scope.currentItem = item;

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.startDragBack = function(ui, event, item) {
        $scope.currentItem = item;

        if (!$scope.$$phase) {
            $scope.$apply();
        }

    };

    $scope.stopDrag = function(ui, event, item) {
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.onActivate = function(ui, event, item) {

        
        $scope.activatedModules[$scope.addOrder].order = $scope.addOrder + 1;


        $scope.addOrder++;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.onDeactivate = function(ui, event, item) {

        delete $scope.funcanswer;

        $scope.addOrder--;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };


    $scope.moduleData = functionTags.result.modules;


});