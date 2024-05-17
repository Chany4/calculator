document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            switch (value) {
                case 'CE':
                    clearDisplay();
                    break;
                case 'DE':
                    deleteCharacter();
                    break;
                case '=':
                    calculateResult();
                    break;
                case 'OFF':
                    turnOff();
                    break;
                default:
                    appendCharacter(value);
                    break;
            }
        });
    });

    function clearDisplay() {
        display.value = '';
    }

    function deleteCharacter() {
        display.value = display.value.slice(0, -1);
    }

    function appendCharacter(character) {
        display.value += character;
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    }

    function turnOff() {
        display.value = '';
    }
});
