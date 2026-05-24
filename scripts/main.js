const titleElement = document.getElementById("main-title");
const originalTitleContent = titleElement.textContent.split("");
const originalLen = originalTitleContent.length;
let len = 0;
let currentText = "";
titleElement.textContent = "";
const intervalId = setInterval(() => {
    currentText = currentText + originalTitleContent[len];
    titleElement.textContent = currentText + "|";

    console.log(`Status: ${len} // ${originalLen}`)
    
    len++;
    if (len === originalLen) {
        titleElement.textContent = currentText; 
        clearInterval(intervalId);
    }
}, 100);