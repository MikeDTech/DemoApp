'use strict';

eventsApp.controller("EditEventController",
    function EditEventsController($scope) {
        $scope.saveEvent = function(newEventForm, event) {
            console.log(newEventForm);
            if (newEventForm.$valid) {
                window.alert('Event: ' + event.name + ' Saved!');
            }
        };


        $scope.cancelEdit = function() {
            window.location = "EventDetails.html";
        };
});