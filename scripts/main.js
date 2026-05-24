// elemNETS
const titleElement = document.getElementById("main-title");
const titleElementOGTEXT = titleElement.textContent
titleElement.textContent = ""
const sloganElement = document.getElementById("slogan");
const sloganElementOGText = sloganElement.textContent;
sloganElement.textContent = ""

// function
var typeEffect = (element, ogText, spacingTimeMS, endingFunction) => {
    // Variables to help us
    const originalElementContent = ogText.split("");
    const originalLen = originalElementContent.length;
    let len = 0;
    let currentText = "";

    // Reset the original text
    element.textContent = "";

    // Do like the type effect
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

typeEffect(titleElement, titleElementOGTEXT, 75, () => {
    setTimeout(() => {
        typeEffect(sloganElement, sloganElementOGText, 90);
    }, 400);
});