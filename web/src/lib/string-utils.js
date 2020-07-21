export function ucfirst (str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
}

export const PolishBreakingText = () => {
  function lastSingleLetterToNewLine(el) {
    let result;
    el.forEach((element, i) => {
       
      if(!element.innerHTML.match(/[{}]|<script|^\n$/gi)){
        result = element.innerHTML.replace(/ (.) /gi, " "+'\$1'+"&nbsp;");
      }
      element.innerHTML = result;
      //console.log(result);
    });
  }
  let el = document.querySelectorAll('h1, h2, h3, h4, h5,, h6, p, span, em, .text, .paragraph');
  lastSingleLetterToNewLine(el);  
}