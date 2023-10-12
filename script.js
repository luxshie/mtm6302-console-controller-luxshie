
function setTheme(theme) {
    document.body.className = theme; // Assign the theme class to the body
  }
  
  function setTitle(newTitle) {
    const pageTitleElement = document.getElementById('pageTitle');
    if (pageTitleElement) {
      pageTitleElement.innerText = newTitle;
    }
  }
  
  function setDescription(newDescription) {
    const pageDescriptionElement = document.getElementById('pageDescription');
    if (pageDescriptionElement) {
      pageDescriptionElement.innerText = newDescription;
    }
  }
  
  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  function setFontColor(color) {
    document.body.style.color = color;
  }
  