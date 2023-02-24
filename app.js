
/** regex info: 
 * re.test(txt) Boolean
 * re[Symbol.match](txt) null or Array
 * re[Symbol.replace](txt) new String
*
* str.match(re) null or Array
* str.replace(re) new String
* str.search(re) -1 or first match
*/

// get find texbox let
// get replace textbox let
// get text to be searched box let
const model = {
  findText: '',
  re: '',
  replaceWith: '',
  textToCheck: '',
  updateFindText: function () {
    this.findText = document.getElementById('find').value;;
    this.re = new RegExp(this.findText, 'gi')
  },
  updateReplaceText: function (updatedReplaceText) {
    this.replaceWith = document.getElementById('replace').value;
  },
  updateTextToCheck: function () {
    this.textToCheck = document.getElementById('texttocheck').value;;
  },
};

// set up serach button ev
// set up replace button ev
const controller = {
  handleSearch: function () {
    model.updateFindText();
    model.updateTextToCheck();
    view.renderSearch(model.re, model.textToCheck);
    model.updateTextToCheck();
  },
  handleReplace: function () {
    model.updateFindText();
    model.updateReplaceText();
    model.updateTextToCheck();
    view.renderReplace(model.re, model.replaceWith, model.textToCheck);
    model.updateTextToCheck();
  }
};

// set up highlighting render 
// set up replace render
const view = {
  renderReplace: function (findText, replaceWith, textToCheck) {
    document.getElementById('texttocheck').value = textToCheck.replace(findText, replaceWith);
  },
  renderSearch: function (findText, textToCheck) {
   let highlightedText= textToCheck.replace(findText, (match) => `<mark>${match}</mark>`);
   document.getElementById('output').innerHTML = highlightedText;
  }
};

// event handlers

document.querySelector('#btnSearch').addEventListener('click', function (e) {
  e.preventDefault();
  controller.handleSearch();
});

document.querySelector('#btnReplace').addEventListener('click', function (e) {
  e.preventDefault();
  controller.handleReplace();
});