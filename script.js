

attributeValues = ['currency: HOURLY_WAGE', 'text: SKILLS', 'text: CONDITIONS'];

let wages = getData(attributeValues[0]);
let skills = getData(attributeValues[1]);
let conditions = getData(attributeValues[2]);

dayAndTime = findDayTime(conditions[0].innerText)

console.log("Day and Time: ", dayAndTime);

console.log(wages);
console.log(skills);
console.log(conditions);

const currencyRegex = /[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$/;
wages[0].innerHTML = wages[0].innerHTML.replace(currencyRegex, '90.00');

function getData(dataAttribute) {
    return document.querySelectorAll(`.show-for-medium-up tr span[data-bind='${dataAttribute}']`)
}

function findDayTime(conditionsString){
    const dayAndTimeRegex = /(4|5|6)*\/(8|10|12)/;
    return conditionsString.match(dayAndTimeRegex);
}    