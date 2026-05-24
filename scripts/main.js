const titleElement = document.getElementById("main-title");
const sloganElement = document.getElementById("slogan");
var typeEffect = (element, spacingTimeMS, endingFunction) => {
    // Reset the original text
    element.textContent = "";
    
    // Variables to help us
    const originalElementContent = element.textContent.split("");
    const originalLen = originalElementContent.length;
    let len = 0;
    let currentText = "";

    const intervalId = setInterval(() => {
        currentText = currentText + originalElementContent[len];
        element.textContent = currentText + "|";

        console.log(`Status: ${len} // ${originalLen}`);
    
        len++;
        if (len === originalLen) {
            element.textContent = currentText; 
            clearInterval(intervalId);
            if (endingFunction !== undefined) {
                endingFunction()
            }
        }
    }, spacingTimeMS);
}

typeEffect(titleElement, 100, () => {
    setTimeout(() => {
        typeEffect(sloganElement, 125);
    }, 750);
});