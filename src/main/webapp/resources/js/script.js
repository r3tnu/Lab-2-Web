const numberInputRegex = /^[-+]?(\d+(\.\d+)?)$/;

const submitButton = document.querySelector('.submit-button');

const xInput = document.querySelector('.x-input');

let validY = true;
const yInput = document.querySelector('.y-input');
yInput.addEventListener('input', () => {

    const y = parseFloat(yInput.value);
    if (y >= -5 && y <= 3 && numberInputRegex.test(yInput.value) && yInput.value.replaceAll('.', '').length < 16) {
        validY = true;
        yInput.style.background = "lightgreen";
    } else {
        validY = false;
        yInput.style.background = "indianred";
    }

    submitButton.disabled = !(validY && validR);
});

let validR = true;
const rInput = document.querySelector('.r-input');
rInput.addEventListener('input', () => {
    const r = parseFloat(rInput.value);
    if (r >= 2 && r <= 5 && numberInputRegex.test(rInput.value) && rInput.value.replace('.', '').length < 16) {
        validR = true;
        rInput.style.background = "lightgreen";
    } else {
        validR = false;
        rInput.style.background = "indianred";
    }
    submitButton.disabled = !(validY && validR);
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const url = `php/checkPoint.php?X=${parseInt(xInput.value)}&Y=${parseFloat(yInput.value)}&R=${parseFloat(rInput.value)}`
    fetch(url)
        .then(response => response.text())
        .then(insertData);
});

function insertData(data) {
    const resultsTable = document.querySelector('.results-table');
    resultsTable.innerHTML = resultsTable.innerHTML + data;
    if (localStorage.getItem("table") !== "" && localStorage.getItem("table") != null) {
        localStorage.setItem("table", localStorage.getItem("table") + data);
    } else {
        localStorage.setItem("table", data);
    }
}

window.addEventListener('load', () => {
    if (localStorage.getItem("table") !== "" && localStorage.getItem("table") != null) {
        const resultsTable = document.querySelector('.results-table');
        resultsTable.innerHTML = resultsTable.innerHTML + localStorage.getItem("table");
    }
})

const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', () => {
    const resultsTable = document.querySelector('.results-table');
    const headerRow = document.querySelector('.header-result-row');
    console.log(headerRow);
    resultsTable.innerHTML = "<tr class='header-result-row'>" + headerRow.innerHTML + "</tr>";
    localStorage.setItem("table", "");
})