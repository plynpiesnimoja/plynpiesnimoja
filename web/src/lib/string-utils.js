export function ucfirst (str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
}

export const TextFormatter = () => {
  function lastSingleLetterToNewLine(el) {
    let result;
    el.forEach(element => {
       
      if(!element.innerHTML.match(/[{}]|<script|^\n$/gi)){
        result = element.innerHTML.replace(/ (.) /gi, " "+'\$1'+"&nbsp;");
      }
      element.innerHTML = result;
      //console.log(result);
    });
  }
  let el = document.querySelectorAll('p, .paragraph, span, .Heading');
  //console.log(el)
  lastSingleLetterToNewLine(el);  
}