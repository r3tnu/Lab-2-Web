import {Canvas} from "./canvas.js";

$(document).ready(() => {

    const canvas = new Canvas("canvas");
    const numberInputRegex = /^[-+]?(\d+(\.\d+)?)$/;

    const xInput = document.querySelector('.x-input');
    const yInput = document.querySelector('.y-input');
    const rInput = document.querySelector('.r-input');
    const submitButton = document.getElementById('submit');
    const clearButton = document.getElementById('clear');

    let validY = true;

    if (hasValue(localStorage.getItem("table"))) {
        const resultsTable = document.querySelector('.results-table-body');
        resultsTable.innerHTML = localStorage.getItem("table");
    }
    canvas.draw();

    function applyErrorMessage(error) {
        document.querySelector(".error-container").innerHTML = error;
    }

    function clearErrors() {
        document.querySelector(".error-container").innerHTML = "";
    }

    canvas.onClick(
        (success) => {
            clearErrors()
            performCalculation(success)
        },
        (error) => applyErrorMessage(error)
    )


    function isInputValid(x, y, r) {
        const xArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3]
        const rArray = [1, 1.5, 2, 2.5, 3]
        return (xArray.includes(x)) && (y >= -5 && y <= 5) && (rArray.includes(r));
    }
    function performCalculation(data) {
        canvas.redraw();
        if (isInputValid(data.x, data.y, data.r)) {
            const url = ctx + `/controller?x=${data.x}&y=${data.y}&r=${data.r}`
            fetch(url)
                .then(response => response.text())
                .then(insertData)
                .then(showPoint);
        } else {
            applyErrorMessage("You clicked on an invalid point");
        }
    }

    yInput.addEventListener('input', () => {

        const y = parseFloat(yInput.value);
        if (y >= -5 && y <= 5 && numberInputRegex.test(yInput.value) && yInput.value.replaceAll('.', '').length < 16) {
            validY = true;
            yInput.style.background = "lightgreen";
        } else {
            validY = false;
            yInput.style.background = "indianred";
        }

        submitButton.disabled = !(validY);
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        canvas.redraw();
        const url = ctx + `/controller?x=${parseInt(xInput.value)}&y=${parseFloat(yInput.value)}&r=${parseFloat(document.querySelector('input[name="r"]:checked').value)}`
        fetch(url)
            .then(response => response.text())
            .then(insertData)
            .then(showPoint);
    });

    function insertData(data) {
        const resultsTable = document.querySelector('.results-table-body');
        resultsTable.innerHTML = data + resultsTable.innerHTML;
        if (localStorage.getItem("table") !== "" && localStorage.getItem("table") != null) {
            localStorage.setItem("table", data + localStorage.getItem("table"));
        } else {
            localStorage.setItem("table", data);
        }
        return data;
    }

    function showPoint(data) {
        const html = $.parseHTML(data)[1];
        const x = parseFloat(html.querySelector('.x-result').innerHTML);
        const y = parseFloat(html.querySelector('.y-result').innerHTML);
        const r = parseFloat(html.querySelector('.r-result').innerHTML);
        const result = html.querySelector('.hit-result').innerHTML.trim() === "Hit";

        canvas.drawPoint(x, y, r);
    }

    clearButton.addEventListener('click', () => {
        const resultsTable = document.querySelector('.results-table-body');
        resultsTable.innerHTML = "";
        localStorage.setItem("table", "");
    })


    function hasValue(data) {
        return (data !== undefined) && (data !== null) && (data !== "");
    }
});