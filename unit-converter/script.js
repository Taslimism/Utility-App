window.addEventListener('load', () => {
    const from = document.querySelector('#from');
    const to = document.querySelector('#to');
    const input = document.querySelector('#input-currency');
    let result = document.querySelector('.result');

    input.addEventListener('input', () => {
        if (from.value === 'inr') {
            if (to.value === 'usd') {
                result.innerText = (input.value / 72).toFixed(2);
            } else if (to.value === 'bhd') {
                result.innerText = (input.value / 193.05).toFixed(2);
            } else if (to.value === 'aed') {
                result.innerText = (input.value / 19.81).toFixed(2);
            } else {
                result.innerText = (input.value).toFixed(2); 
            }
        }

        if (from.value === 'usd') {
            if (to.value === 'inr') {
                result.innerText = (input.value / 72).toFixed(2);
            } else if (to.value === 'bhd') {
                result.innerText = (input.value * .38).toFixed(2);
            } else if (to.value === 'aed') {
                result.innerText = (input.value * 3.67).toFixed(2);
            } else {
                result.innerText = (input.value).toFixed(2); 
            }
        }

        if (from.value === 'bhd') {
            if (to.value === 'inr') {
                result.innerText = (input.value * 193.05).toFixed(2);
            } else if (to.value === 'usd') {
                result.innerText = (input.value * 2.65).toFixed(2);
            } else if (to.value === 'aed') {
                result.innerText = (input.value * 9.74).toFixed(2);
            } else {
                result.innerText = (input.value).toFixed(2); 
            }
        }

        if (from.value === 'aed') {
            if (to.value === 'inr') {
                result.innerText = (input.value * 19.81).toFixed(2);
            } else if (to.value === 'usd') {
                result.innerText = (input.value / 0.27).toFixed(2);
            } else if (to.value === 'bhd') {
                result.innerText = (input.value / 9.74).toFixed(2);
            } else {
                result.innerText = (input.value).toFixed(2); 
            }
        }
    })   
})