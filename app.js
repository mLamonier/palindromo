function palindromo(){
    let str = document.getElementById('palindromo').value;
    
    let re = /[^A-Za-z0-9]/g; //RegExp (Expressão Regular que seleciona apenas caracteres alfanuméricos)

    let lowRegStr = str.toLowerCase().replace(re, '');
    //toLowerCase = deixa tudo minúsculo
    //replace = substituição -> (string, RegExp)

    let reverseStr = lowRegStr.split('').reverse().join('');
    //split = cria lista de arrays com cada letra
    //reverse = inverte a ordem dos arrays
    //join = cria uma string baseado na ordem do array

    if(reverseStr === lowRegStr){ //reverseStr é idêntico a loRegStr?
        alert('A palavra/frase É um palíndromo!');
        document.getElementById('palindromo').value = '';
    } else {
        alert('A palavra/frase NÃO é um palíndromo!');
        document.getElementById('palindromo').value = '';
    }
}