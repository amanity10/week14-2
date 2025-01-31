const text = document.getElementById(`text`);
const newText = text.textContent;
console.log(newText);

const resultOne = text.textContent.length;
console.log(resultOne);

const resultTwo = newText.replace(/;/g,`\n`);
console.log(resultTwo);

const substring = resultTwo.replace(/\s+/g,'');
console.log(substring);

const newTextTwo = resultTwo.slice(28,50);
console.log(newTextTwo);

const replacedText = newTextTwo.replace("клён","дубе");
console.log(replacedText);

const replacedText2 = resultTwo.toUpperCase();
console.log(replacedText2);

const replacedText3 = resultTwo.replace(/клён/g,"дуб");
console.log(replacedText3);

const index = resultTwo.indexOf(`моря`);
console.log(index);


 const findLetter = replacedText[0];
 const upperLetter = findLetter.toUpperCase();
 const slicedText = replacedText.slice(1);
const modifiedText = (upperLetter + slicedText);
 console.log(modifiedText);
 
 




 