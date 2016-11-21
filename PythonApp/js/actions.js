$(function() {
    $('#btnSignUp').click(function() {

        $.ajax({
            url: '/signUp',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
            },<script src="../static/js/jquery-3.1.0.min.js"></script>
<script src="../static/js/signUp.js"></script>
            error: function(error) {
                console.log(error);
            }
        });
    });
});
