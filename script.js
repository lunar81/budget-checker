let wages = document.querySelectorAll(".show-for-medium-up tr span[data-bind='currency: HOURLY_WAGE']")

for (let i = 0; i < wages.length; i++) {
    wages[i].innerHTML = wages[i].innerHTML.replace(/[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$/, '90.00');
}
