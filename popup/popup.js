// Wordnik API key:
// let api_key = '/?api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7'

console.log("Hello")



  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word.trim();
  console.log(word)
  let url = `http://api.wordnik.com:80/v4/word.json/
  ${word}
  /definitions?limit=1
  &includeRelated=false
  &sourceDictionaries=all
  &useCanonical=false
  &includeTags=false
  &api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7
  `;
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));



  //document.getElementById('explain').innerHTML= response.json.data[0].text;