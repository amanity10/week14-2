const text = document.getElementById(`text`);
const newText = text.textContent;
console.log(newText);

const resultOne = text.textContent.length;
console.log(resultOne);

const resultTwo = newText.replace(/;/g,`\n`);
console.log(resultTwo);

const substring = resultTwo.replace(`/\s+/g`,'');
console.log(substring);

const newTextTwo = resultTwo.slice(28,50);
console.log(newTextTwo);

//console.log(`3. Текст с удалёнными пробелами: ${substring}`);
//console.log(`4. Извлечение подстроки: ${newText}`);
//console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
//console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
//console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
//console.log(`8. Индекс первого вхождения "моря": ${index}`);
//console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);