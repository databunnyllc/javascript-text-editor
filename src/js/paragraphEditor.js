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