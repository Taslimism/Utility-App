window.addEventListener('load', () => {
    const from = document.querySelector('#from');
    const to = document.querySelector('#to');
    const input = document.querySelector('#input-weight');
    let result = document.querySelector('.result');

    input.addEventListener('input',()=>{
        if(from.value === 'kg'){
            if(to.value === 'g'){
                result.textContent = parseInt(from.value * 1000).toFixed(2);
            } else if(to.value === 'pound'){
                result.textContent = (input.value * 2.2046226218).toFixed(2);
            } else if(to.value === 'ton'){
                result.textContent = (input.value * 0.001).toFixed(2);
            } else {
                result.textContent = input.value;
            }
        }
        if(from.value === 'g'){
            if(to.value === 'kg'){
                result.textContent = (input.value / 1000).toFixed(2);
            } else if(to.value === 'pound'){
                result.textContent = (input.value * 0.0022046226).toFixed(2);
            } else if(to.value === 'ton'){
                result.textContent = (input.value * 0.000001).toFixed(2);
            } else {
                result.textContent = from.value;
            }
        }
        if(from.value === 'pound'){
            if(to.value === 'g'){
                result.textContent = (input.value * 453.59237).toFixed(2);
            } else if(to.value === 'kg'){
                result.textContent = (input.value * 0.45359237).toFixed(2);
            } else if(to.value === 'ton'){
                result.textContent = (input.value * 0.0004535924).toFixed(2);
            } else {
                result.textContent = input.value;
            }
        }
        if(from.value === 'ton'){
            if(to.value === 'g'){
                result.textContent = (input.value * 1000000).toFixed(2);
            } else if(to.value === 'pound'){
                result.textContent = (input.value * 2204.6226218).toFixed(2);
            } else if(to.value === 'kg'){
                result.textContent = (input.value * 1000).toFixed(2);
            } else {
                result.textContent = from.value;
            }
        }

    })
    
})