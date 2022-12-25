const texto = document.querySelector('.input-texto');
const criptografar = document.querySelector('.botao-criptografar');
const descriptografar = document.querySelector('.botao-descriptografar');
const retanguloSuperior = document.querySelector('.retangulo-superior');
const outputTexto = document.querySelector('.output-texto');

function tornaOutputVisivel(textoCriptogradado) {
    const imagem = retanguloSuperior;
    const textArea = outputTexto;

    textArea.value = textoCriptogradado;
    imagem.style.visibility = 'hidden';
    textArea.style.visibility = 'visible';
}

function tornaOutputOculto() {
    const imagem = retanguloSuperior;
    const textArea = outputTexto;

    imagem.style.visibility = 'visible';
    textArea.style.visibility = 'hidden';
}

function apenasLetrasMinusculas(texto) {
    const alfabeto = /^[a-z]+$/;

    return alfabeto.test(texto);
}

criptografar.addEventListener('click', function() {
    const textoSemEspacos = texto.value.replaceAll(' ', '');
 
    if (!apenasLetrasMinusculas(textoSemEspacos)) {
        alert('O texto deve conter apenas letras minúsuclas');
        return
    }

    const textoCriptogradado = texto.value.
        replaceAll('e', 'enter').
        replaceAll('i', 'imes').
        replaceAll('a', 'ai').
        replaceAll('o', 'ober').
        replaceAll('u', 'ufat');

    tornaOutputVisivel(textoCriptogradado);
})

descriptografar.addEventListener('click', function() {
    const textoSemEspacos = texto.value.replaceAll(' ', '');
 
    if (!apenasLetrasMinusculas(textoSemEspacos)) {
        alert('O texto deve conter apenas letras minúsuclas');
        return
    }

    texto.value = texto.value.
        replaceAll('enter', 'e').
        replaceAll('imes', 'i').
        replaceAll('ai', 'a').
        replaceAll('ober', 'o').
        replaceAll('ufat', 'u');

    tornaOutputOculto();
})