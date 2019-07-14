/*
*
*   Takes the inner html that is truncated in the calender, and places the text in the title attribute for hover reading.
*
*/
const escape = text => {
    return text.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
}

let elements = document.getElementsByClassName('fc-title');

let theKeys = Object.keys(elements);

theKeys.forEach( key => {
    let text = elements[key].innerHTML;
    elements[key].setAttribute('title', escape(text));
});