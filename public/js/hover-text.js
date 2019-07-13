/*
*
*   Takes the inner html that is truncated in the calender, and places the text in the title attribute for hover reading.
*
*/


let elements = document.getElementsByClassName('fc-title');

let theKeys = Object.keys(elements);

theKeys.forEach( key => {
    let text = elements[key].innerHTML;
    elements[key].setAttribute('title', text);
});