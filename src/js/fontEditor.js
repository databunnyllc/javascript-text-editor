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