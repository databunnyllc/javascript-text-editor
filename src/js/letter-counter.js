
// Display the textarea value's length in the span.
let display_count = () => {
    console.log("--UPDATING LETTER COUNT--");
    counter.textContent = textarea.value.length;
}
// Calls the 'display_count' function every second.
setInterval(display_count, 500);
