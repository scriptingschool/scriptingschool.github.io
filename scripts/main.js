const titleElement = document.getElementById("main-title");
const originalTitleContent = titleElement.textContent.split("");
const originalLen = 0;
let len = 0;
let currentText = "";
titleElement.textContent = "";
const intervalId = setInterval(() => {
    currentText = currentText + originalTitleContent[len];
    titleElement.textContent = currentText + "|";
    
    len++;
    if (len === originalLen) {
        clearInterval(intervalId);
    }
}, 100);