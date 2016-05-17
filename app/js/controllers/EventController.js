'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red">Hi There</span>';  //ng sanitize filters out the red so only the text will show
        $scope.boolValue = true;
        $scope.mystyle = { color: 'red' }; // is like adding inline css
        $scope.myclass = 'lightblue'; // is calling the .blue call from your css file.
        $scope.buttonDisabled = true;
        $scope.sortorder = '-upVoteCount'; // Decending upVoteCount Default Sort Order
        $scope.query = '';

        $scope.event = {
            name: "Angular Boot Camp",
            date: "1/1/2016",
            time: "12:00 pm",
            location: {
                address: "Google Headquarters",
                city: "Mountain View",
                province: "CA"
            },
            imageUrl: "img/angularjs-logo.png",
            sessions: [
                {
                    name: "Directives Masterclass",
                    creatorName: "Bob Smith",
                    duration: 1,
                    level: "Advanced",
                    abstract: "In this session you will learn the ins and outs of Directives",
                    upVoteCount: 0
                },
                {
                    name: "Scopes for Fun and Profit",
                    creatorName: "John Doe",
                    duration: 2,
                    level: "Introductory",
                    abstract: "In this session you will learn the ins and outs of Scopes",
                    upVoteCount: 0
                },
                {
                    name: "Well Behaved Controllers",
                    creatorName: "Bob Smith",
                    duration: 4,
                    level: "Intermediate",
                    abstract: "In this session you will learn the ins and outs of Controllers",
                    upVoteCount: 0
                }
    ]};

        $scope.upVoteSession = function(session) {
            session.upVoteCount ++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount --;
        };
});