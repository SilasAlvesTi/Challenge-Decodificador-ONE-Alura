const texto = document.querySelector('.input-texto')
const criptografar = document.querySelector('.botao-criptografar')
const descriptografar = document.querySelector('.botao-descriptografar')


criptografar.addEventListener('click', function() {
    const alfabeto = /^[a-z]+$/;
    const textoSemEspacos = texto.value.replaceAll(' ', '')
 
    if (!alfabeto.test(textoSemEspacos)) {
        alert('O texto deve conter apenas letras minúsuclas')
        return
    }

    texto.value = texto.value.
        replaceAll('e', 'enter').
        replaceAll('i', 'imes').
        replaceAll('a', 'ai').
        replaceAll('o', 'ober').
        replaceAll('u', 'ufat')
    
})

descriptografar.addEventListener('click', function() {
    const alfabeto = /^[a-z]+$/;
    const textoSemEspacos = texto.value.replaceAll(' ', '')
 
    if (!alfabeto.test(textoSemEspacos)) {
        alert('O texto deve conter apenas letras minúsuclas')
        return
    }

    texto.value = texto.value.
        replaceAll('enter', 'e').
        replaceAll('imes', 'i').
        replaceAll('ai', 'a').
        replaceAll('ober', 'o').
        replaceAll('ufat', 'u')
    
})