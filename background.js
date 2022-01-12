window.word = '';

chrome.runtime.onMessage.addListener(getword)

function getword(request, sender , response){
    word = request.text;
    console.log(word)
}