$(document).ready(function(){
    $("#printButton").click(function() {
        $(this).printPreview({
            obj2print: "textarea"
        });
    });
});