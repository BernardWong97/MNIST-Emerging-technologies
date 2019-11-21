
$(document).ready(function (e) {
    $('#submitButton').click(function (e) {
        
        e.preventDefault();

        var imgUrl = document.getElementById('canvas').toDataURL();
        
        $.post('/predict', {"imgUrl": imgUrl}, function (data) {
            $("#result").text("Predicted Output: " +  data);
        })
        
    });
});
