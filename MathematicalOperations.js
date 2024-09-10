let arr = [];
    function history(expression){
        arr.push(expression);
    }

    function enableScroll(){
        document.getElementById('wide').style.overflow = "auto"; 
    }

    function displayHistory(){
        enableScroll();
        document.getElementById('wide').innerText = arr.join('\n');
    }

    function appendNumber(number) {
        document.getElementById('wide').innerText += number;
    }

    function appendOperator(operator) {
        let display = document.getElementById('wide').innerText;
        if (display && !isNaN(display.slice(-1))) {
            document.getElementById('wide').innerText +=  operator ;
        }
    }

    function appendParenthesis(paren) {
        document.getElementById('wide').innerText += paren;
    }

    function deleteLast() {
        let currentDisplay = document.getElementById('wide').innerText;
        document.getElementById('wide').innerText = currentDisplay.slice(0, -1);
    }

    function clearDisplay() {
        document.getElementById('wide').innerText = '';
    }

    function performOperation(operation) {
        let currentDisplay = document.getElementById('wide').innerText;
        let result;
        if (operation === 'percent') {
            result = eval(currentDisplay) / 100;
        }
        document.getElementById('wide').innerText = result;
    }

    function applyFunction(func) {
        let currentDisplay = document.getElementById('wide').innerText;
        let result;
        let value = parseFloat(currentDisplay);
        if (!isNaN(value)) {
            if (func === 'sin') {
                result = Math.sin(value * Math.PI / 180); 
                arr.push(`sin(${value})`);
            } else if (func === 'cos') {
                result = Math.cos(value * Math.PI / 180); 
                arr.push(`cos(${value})`);
            } else if (func === 'tan') {
                result = Math.tan(value * Math.PI / 180);
                arr.push(`tan(${value})`);
            } else if (func === 'exp') {
                result = Math.exp(value);
                arr.push(`exp(${value})`);
            } else if (func === 'ln') {
                result = Math.log(value);
                arr.push(`ln(${value})`);
            }
        } else {
            result = 'Error';
        }
        arr.push(result);
        document.getElementById('wide').innerText = result;
    }



    function calculateResult() {
        let currentDisplay = document.getElementById('wide').innerText;
        history(currentDisplay);
        let result;
        try {
            result = eval(currentDisplay);
        } catch (error) {
            result = 'Error';
        }
        arr.push(result);
        document.getElementById('wide').innerText = result;
    }