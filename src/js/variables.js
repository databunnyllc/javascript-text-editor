
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