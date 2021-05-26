window.addEventListener('load',()=>{
    const input = document.querySelector('#input');
    
    const result = document.querySelector('#result');
    const from = document.querySelector('.from');
    const to = document.querySelector('.to');
    console.log(from);
    input.addEventListener('input',()=>{

        if(from.value === 'binary'){
            if(to.value === 'decimal') {
                result.value = parseInt(input.value,2);
            }else if(to.value === 'octal'){
                result.value = parseInt(input.value,2).toString(8);
            }else if(to.value === 'hexadecimal'){
                result.value = parseInt(input.value,2).toString(16).toUpperCase;
            }else if(input.value === ''){
                result.value = '';
            }else{
                result.value = `Try cross radix conversion`;
            }
        }

        if(from.value === 'octal'){
            if(to.value === 'decimal') {
                result.value = parseInt(input.value,8);
            }else if(to.value === 'binary'){
                result.value = parseInt(input.value,8).toString(2);
            }else if(to.value === 'hexadecimal'){
                result.value = parseInt(input.value,8).toString(16).toUpperCase;
            }else if(input.value === ''){
                result.value = '';
            }else{
                result.value = `Try cross radix conversion`;
            }
        }

        if(from.value === 'decimal'){
            if(to.value === 'octal') {
                result.value = parseInt(input.value,10).toString(8);
            }else if(to.value === 'binary'){
                result.value = parseInt(input.value,10).toString(2);
            }else if(to.value === 'hexadecimal'){
                result.value = parseInt(input.value,10).toString(16).toUpperCase;
            }else if(input.value == ''){
                result.value = '';
            }else{
                result.value = `Try cross radix conversion`;
            }
        }

        if(from.value === 'hexadecimal'){
            if(to.value === 'octal') {
                result.value = parseInt(input.value,16).toString(8);
            }else if(to.value === 'binary'){
                result.value = parseInt(input.value,16).toString(2);
            }else if(to.value === 'decimal'){
                result.value = parseInt(input.value,16);
            }else if(input.value == ''){
                result.value = '';
            }else{
                result.value = input.value.toUpperCase();
            }
        }

        
    })

})