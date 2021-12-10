window.addEventListener('load', () => {
    const input = document.querySelector('#input');

    const result = document.querySelector('#result');
    const from = document.querySelector('.from');
    const to = document.querySelector('.to');

    input.addEventListener('input', () => {
        if (input.value === '') {
            result.value = '';
        } else {

            if (from.value === 'binary') {
                if (isNaN(parseInt(input.value, 2)))
                    result.value = `Please enter value in range`
                else {
                    if (to.value === 'decimal') {
                        result.value = parseInt(input.value, 2);
                    } else if (to.value === 'octal') {
                        result.value = parseInt(input.value, 2).toString(8);
                    } else if (to.value === 'hexadecimal') {
                        result.value = parseInt(input.value, 2).toString(16).toUpperCase;
                    } else if (input.value === '') {
                        result.value = '';
                    } else {
                        result.value = `Try cross radix conversion`;
                    }
                }

            }

            if (from.value === 'octal') {

                if (isNaN(parseInt(input.value, 8)))
                    result.value = `Please enter value in range`
                else {
                    if (to.value === 'decimal') {
                        result.value = parseInt(input.value, 8);
                    } else if (to.value === 'binary') {
                        result.value = parseInt(input.value, 8).toString(2);
                    } else if (to.value === 'hexadecimal') {
                        result.value = parseInt(input.value, 8).toString(16).toUpperCase;
                    } else if (input.value === '') {
                        result.value = '';
                    } else {
                        result.value = `Try cross radix conversion`;
                    }
                }
            }

            if (from.value === 'decimal') {
                if (isNaN(parseInt(input.value, 10)))
                    result.value = `Please enter value in range`
                else {
                    if (to.value === 'octal') {
                        result.value = parseInt(input.value, 10).toString(8);
                    } else if (to.value === 'binary') {
                        result.value = parseInt(input.value, 10).toString(2);
                    } else if (to.value === 'hexadecimal') {
                        result.value = parseInt(input.value, 10).toString(16).toUpperCase;
                    } else if (input.value == '') {
                        result.value = '';
                    } else {
                        result.value = `Try cross radix conversion`;
                    }
                }
            }

            if (from.value === 'hexadecimal') {
                if (isNaN(parseInt(input.value, 16)))
                    result.value = `Please enter value in range`
                else {
                    if (to.value === 'octal') {
                        result.value = parseInt(input.value, 16).toString(8);
                    } else if (to.value === 'binary') {
                        result.value = parseInt(input.value, 16).toString(2);
                    } else if (to.value === 'decimal') {
                        result.value = parseInt(input.value, 16);
                    } else if (input.value == '') {
                        result.value = '';
                    } else {
                        result.value = input.value.toUpperCase();
                    }
                }
            }
        }

    })

})