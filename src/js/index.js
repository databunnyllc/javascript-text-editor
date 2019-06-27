
// Getting the font selector options
let font_family_options = document.querySelectorAll("#font-selector-area select");

const paragraph_buttons = document.querySelectorAll("#text-align-area div");

// Get the styles boxes
const styles_boxes = document.querySelectorAll(".styles-area div");
// Spacing variables
const normal_spacing = "normal";
const no_spacing = "1.0";
const double_spacing = "2.0";
// Default styles boxes bg color
let styles_default_color = "white";

// Getting the print button
const print_button = document.querySelector(".print-area button");

// Getting the page textarea text content
const page_text = document.querySelector("#doc-text-area textarea");

const highlightColor = "#e6e6e6";

// Get the textarea.
let textarea = document.querySelector("#doc-text-area textarea");
// Get the span in the letter-counter-area.
let counter = document.querySelector(".letter-counter-area p span");

/** If font-selector-area's select value equals to the font,
 *  change textarea style fontFamily.
*/
// Default font family
textarea.style.fontFamily = "Arial";

// Default font size
textarea.style.fontSize = "11pt";

for(let i = 0; i < font_family_options[0].length; i += 1)
// Setting the font-selector-area option font to the textContent.
font_family_options[0][i].style.fontFamily = font_family_options[0][i].value;

// Set font family on selection
let set_font_family = () => {
    textarea.style.fontFamily = font_family_options[0].value;
}
font_family_options[0].addEventListener("click", set_font_family, false);

// Set the font size on selection
let  set_font_size = () => {
    textarea.style.fontSize = font_family_options[1].value;
}
font_family_options[1].addEventListener("click", set_font_size, false);

// Align Text Left
const makeLeft = () => {
    page_text.style.textAlign = "left";
}
// Align Text Center
const makeCenter = () => {
    page_text.style.textAlign = "center";
}
// Align Text Right 
const makeRight = () => {
    page_text.style.textAlign = "right";
}
paragraph_buttons[0].addEventListener("click", makeLeft, false);
paragraph_buttons[1].addEventListener("click", makeCenter, false);
paragraph_buttons[2].addEventListener("click", makeRight, false);

// Functions for spacing for the text.
const addNormalSpacing = () => {
    page_text.style.lineHeight = normal_spacing;
    styles_boxes[0].style.backgroundColor = highlightColor;
    styles_boxes[1].style.backgroundColor = styles_default_color;
    styles_boxes[2].style.backgroundColor = styles_default_color;
}
const addNoSpacing = () => {
    page_text.style.lineHeight = no_spacing;
    styles_boxes[0].style.backgroundColor = styles_default_color;
    styles_boxes[1].style.backgroundColor = highlightColor;
    styles_boxes[2].style.backgroundColor = styles_default_color;
}
const addDoubleSpacing = () => {
    page_text.style.lineHeight = double_spacing;
    styles_boxes[0].style.backgroundColor = styles_default_color;
    styles_boxes[1].style.backgroundColor = styles_default_color;
    styles_boxes[2].style.backgroundColor = highlightColor;
}
styles_boxes[0].addEventListener("click", addNormalSpacing, false);
styles_boxes[1].addEventListener("click", addNoSpacing, false);
styles_boxes[2].addEventListener("click", addDoubleSpacing, false);
$(document).ready(function(){
    $("#printButton").click(function() {
        $(this).printPreview({
            obj2print: "textarea"
        });
    });
});
;(function ( $ ) {
    $.fn.printPreview = function( options ) {
        var elem = this;
        
        var opt = $.extend({
            obj2print:'body',
            style:'',
            width:'100%',
            height:screen.height-105,
            top:0,
            left:'center',
            resizable : 'yes',
            scrollbars:'yes',
            status:'no',
            title:'Print Preview'
        }, options );
        if(opt.left == 'center'){
            opt.left=(screen.width/2)-(opt.width/2);
        }
        $(opt.obj2print+" input").each(function(){
            $(this).attr('value',$(this).val());
        });
        $(opt.obj2print+" textarea").each(function(){
            $(this).html($(this).val());
        });
        return elem.bind("click.printPreview", function () {
            var btnCode = elem[0].outerHTML;
            var headString = '';
            headString = $("head").html();
            var str = "<!DOCTYPE html><html><head>"+headString+opt.style+"</head><body>";
            str+=$(opt.obj2print)[0].outerHTML.replace(btnCode,'')+"</body></html>";
            //top open multiple instances we have to name newWindow differently, so getting milliseconds
            var d = new Date();
            var n = 'newWindow'+d.getMilliseconds();
            var newWindow = window.open(
                    "", 
                    n, 
                    "width="+opt.width+
                    ",top="+opt.top+
                    ",height="+opt.height+
                    ",left="+opt.left+
                    ",resizable="+opt.resizable+
                    ",scrollbars="+opt.scrollbars+
                    ",status="+opt.status
                    );
            newWindow.document.write(str);
            newWindow.document.title = opt.title;
        });
    };
}( jQuery ));


// Display the textarea value's length in the span.
let display_count = () => {
    console.log("--UPDATING LETTER COUNT--");
    counter.textContent = textarea.value.length;
}
// Calls the 'display_count' function every second.
setInterval(display_count, 500);
