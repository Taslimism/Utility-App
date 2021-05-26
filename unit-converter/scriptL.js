window.addEventListener('load', () => {
    const from = document.querySelector('#from');
    const to = document.querySelector('#to');
    const input = document.querySelector('#input-length');
    let result = document.querySelector('.result');

 input.addEventListener('change',()=>{
    if(from.value === 'km'){
        if(to.value === 'm'){
            result.textContent = (input.value * 1000).toFixed(2);
        } else if(to.value === 'cm'){
            result.textContent = (input.value * 100000).toFixed(2);
        } else if(to.value === 'mm'){
            result.textContent = (input.value * 1000000).toFixed(2);
        } else {
            result.textContent = input.value;
        }
    }

    if(input.value === 'm'){
        if(to.value === 'km'){
            result.textContent = (input.value / 1000).toFixed(2);
        } else if(to.value === 'cm'){
            result.textContent = (input.value * 100).toFixed(2);
        } else if(to.value === 'mm'){
            result.textContent = (input.value * 1000).toFixed(2);
        } else {
            result.textContent = input.value;
        }
    }

    if(input.value === 'cm'){
        if(to.value === 'm'){
            result.textContent = (input.value / 100).toFixed(2);
        } else if(to.value === 'km'){
            result.textContent = (input.value / 100000).toFixed(2);
        } else if(to.value === 'mm'){
            result.textContent = (input.value / 10).toFixed(2);
        } else {
            result.textContent = input.value;
        }
    }

    if(input.value === 'mm'){
        if(to.value === 'm'){
            result.textContent = (input.value / 1000).toFixed(2);
        } else if(to.value === 'cm'){
            result.textContent = (input.value / 100000).toFixed(2);
        } else if(to.value === 'km'){
            result.textContent = (input.value / 1000000).toFixed(2);
        } else {
            result.textContent = input.value;
        }
    }

 })   
    
})