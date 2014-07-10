
$(document).ready(function() {
    $('#interviewForm').bootstrapValidator({
        feedbackIcons: {
            /* valid: 'glyphicon glyphicon-ok',
             invalid: 'glyphicon glyphicon-remove',
             validating: 'glyphicon glyphicon-refresh'*/
        },
        fields: {
            'cars[]': {
                validators: {
                    choice: {
                        min: 1,
                        max: 1,
                        message: 'Please choose one car'
                    }
                }
            },
            'firstname': {
                validators: {
                    notEmpty: {

                        message: 'Please enter your firstname'
                    }
                }
            },
            'place':{
                validators:{
                    notEmpty: {
                        message: 'Please enter a location'
                    }
                }
            },
            'lastname': {
                validators: {
                    notEmpty: {

                        message: 'Please enter your lastname'
                    }
                }
            },

            'analysis[]':{
                validators:{
                    notEmpty:{
                        message:'Please choose an analysis type'
                    }
                }
            },

            'algo':{
                validators:{
                    notEmpty:{
                        message:'Please choose an algorithm'
                    }
                }
            },

            'desc':{
                validators:{
                    notEmpty:{
                        message:'Please enter a description'
                    }
                }
            },

            'date':{
                validators:{
                    notEmpty:{
                        message:'Please choose a date'
                    }
                }
            },




        }
    });
});
