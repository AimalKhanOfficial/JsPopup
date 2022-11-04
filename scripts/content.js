document.addEventListener('DOMContentLoaded', function() {
    var clickMeButton = document.getElementById('btnClickMe');
    // onClick's logic below:
    clickMeButton.addEventListener('click', function() {
        alert('Hello World');
    });
});