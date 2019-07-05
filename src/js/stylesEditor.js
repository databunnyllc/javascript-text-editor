
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