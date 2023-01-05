const CLASSNAME = 'css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws';

function removeFirstChild() {
    let divs = document.getElementsByClassName(CLASSNAME);
  
    for (let i = 0; i < divs.length; i++) {
      let div = divs[i];
      if (div.children.length >= 6) {
        div.removeChild(div.firstChild);
      }
    }
  }
  
  const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        removeFirstChild();
      }
    }
  };
  
const observer = new MutationObserver(callback);
observer.observe(document, { childList: true, subtree: true });